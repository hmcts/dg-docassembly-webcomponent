import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss']
})
export class FormViewerComponent implements OnInit, OnDestroy {
  private url = 'http://localhost:9000/api/templates/SimpleParagraphsSpike.docx/uiDefinition';

  private formFieldsSub: Subscription;
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFormFields();
  }

  ngOnDestroy() {
    if (this.formFieldsSub) {
      this.formFieldsSub.unsubscribe();
    }
  }

  getFormFields() {
    this.http.get(this.url).subscribe((field) =>
      this.fields = [].concat(JSON.parse(JSON.stringify(field))));
  }

  onClick() {
    this.getFormFields();
  }

}
