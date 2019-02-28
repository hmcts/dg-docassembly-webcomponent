import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { AssemblyService } from '../../shared/assembly.service';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html'
})
export class FormViewerComponent {

  uiDefinition: Observable<FormlyFieldConfig[]>;
  form = new FormGroup({});
  documentData: any = {};
  @Output() previewDocument = new EventEmitter();

  constructor(private templatesService: AssemblyService) {
    this.uiDefinition = this.templatesService.getUIDefinition();
  }

  onPreview() {
    this.previewDocument.emit(this.documentData);
  }
}
