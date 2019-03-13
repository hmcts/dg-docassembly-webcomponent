import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { AssemblyService } from '../../shared/assembly.service';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html'
})
export class FormViewerComponent implements OnInit {

  uiDefinition: Observable<FormlyFieldConfig[]>;
  form = new FormGroup({});
  outputFormat: string;
  @Input() templateName: string;
  @Input() templateData: any;
  @Input() outputFormats: any;
  @Output() previewDocument = new EventEmitter();

  constructor(private assemblyService: AssemblyService) {}

  ngOnInit(): void {
    console.log(`template name in the form viewer: ${ this.templateName }`);
    this.uiDefinition = this.assemblyService.getUIDefinition(this.templateName);
  }

  setOutputFormat(outputFormat: string) {
    this.outputFormat = outputFormat;
  }

  onPreview() {
    const documentUrl = this.assemblyService.generateDocument(this.outputFormat, this.templateName, this.templateData);
    this.previewDocument.emit({ templateData: this.templateData, documentUrl });
  }
}
