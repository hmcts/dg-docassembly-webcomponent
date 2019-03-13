import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assembly-viewer',
  templateUrl: './assembly-viewer.component.html',
  styleUrls: ['./assembly-viewer.component.scss']
})
export class AssemblyViewerComponent {

  outputFormat = 'pdf';
  documentUrl: Observable<string>;

  @Input() outputFormats = [];
  @Input() templateName: string;
  @Input() templateData: any;

  @ViewChild('modalTemplate') modalTemplate: ElementRef;

  constructor() {}

  previewDocument({ templateData, documentUrl }) {
    this.templateData = templateData;
    this.documentUrl = documentUrl;
  }

  showModal() {
    this.modalTemplate.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.modalTemplate.nativeElement.style.display = 'none';
  }
}
