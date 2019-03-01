import { Component, TemplateRef } from '@angular/core';
import { AssemblyService } from '../shared/assembly.service';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-assembly-viewer',
  templateUrl: './assembly-viewer.component.html'
})
export class AssemblyViewerComponent {
  documentUrl: Observable<string>;
  modalRef: BsModalRef;
  templateName: string;

  constructor(private assemblyService: AssemblyService,
              private modalService: BsModalService) {}

  previewDocument(documentData: any, modalTemplate: TemplateRef<any>) {
    this.templateName = this.assemblyService.templateName.getValue();
    this.documentUrl = this.assemblyService.generateDocument(documentData);
    this.modalRef = this.modalService
      .show(
        modalTemplate,
        Object.assign({}, { class: 'modal-xl' })
      );
  }
}
