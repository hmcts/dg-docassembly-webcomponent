import { Component, Input, TemplateRef } from '@angular/core';
import { AssemblyService } from '../shared/assembly.service';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-assembly-viewer',
  templateUrl: './assembly-viewer.component.html'
})
export class AssemblyViewerComponent {

  modalRef: BsModalRef;
  showForm = false;

  templateName: string;
  documentUrl: Observable<string>;

  @Input() templateData: any;
  @Input() templates: string[];

  constructor(private assemblyService: AssemblyService,
              private modalService: BsModalService) {}

  setTemplate(templateName: string) {
    this.templateName = templateName;
    console.log(`assembly viewer setting the template name: ${templateName}`);
    this.showForm = true;
  }

  previewDocument(templateData: any, modalTemplate: TemplateRef<any>) {
    this.templateData = templateData;
    this.documentUrl = this.assemblyService.generateDocument(this.templateName, templateData);
    this.modalRef = this.modalService
      .show(
        modalTemplate,
        Object.assign({}, { class: 'modal-xl' })
      );
  }
}
