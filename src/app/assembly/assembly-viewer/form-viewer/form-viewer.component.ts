import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TemplatesService } from '../../shared/templates.service';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss']
})
export class FormViewerComponent implements OnInit, OnDestroy {
  private formFieldsSub: Subscription;
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  constructor(private http: HttpClient,
              private templatesService: TemplatesService) { }

  ngOnInit() {
    this.getFormFields();
  }

  ngOnDestroy() {
    if (this.formFieldsSub) {
      this.formFieldsSub.unsubscribe();
    }
  }

  getFormFields() {
    this.templatesService.getTemplateUiDefinition().subscribe((field) =>
      this.fields = [].concat(JSON.parse(JSON.stringify(field))));
  }

}
