import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { AssemblyService } from '../../shared/assembly.service';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html'
})
export class FormViewerComponent implements OnChanges {

  uiDefinition: Observable<FormlyFieldConfig[]>;
  form = new FormGroup({});
  @Input() templateName: string;
  @Input() templateData: any;
  @Output() previewDocument = new EventEmitter();

  constructor(private assemblyService: AssemblyService) {}

  onPreview() {
    this.previewDocument.emit(this.templateData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.templateName) {
      console.log(`template name in the form viewer: ${changes.templateName.currentValue}`);
      this.uiDefinition = this.assemblyService.getUIDefinition(changes.templateName.currentValue);
    }
  }
}
