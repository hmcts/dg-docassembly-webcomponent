import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { TemplatesService } from '../../shared/templates.service';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss']
})
export class FormViewerComponent {
  uiDefinition: Observable<FormlyFieldConfig[]>;
  form = new FormGroup({});
  model: any = {};

  constructor(private templatesService: TemplatesService) {
    this.uiDefinition = this.templatesService.getUIDefinition();
  }

  onPreview() {
    console.log(this.model);
  }

}
