import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AssemblyService } from '../shared/assembly.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assembly-viewer',
  templateUrl: './assembly-viewer.component.html',
  styleUrls: ['./assembly-viewer.component.scss']
})
export class AssemblyViewerComponent {

  showForm = false;

  templateName: string;
  documentUrl: Observable<string>;

  @Input() templateData: any;
  @Input() templates: string[];

  @ViewChild('modalTemplate') modalTemplate: ElementRef;

  constructor(private assemblyService: AssemblyService) {}

  setTemplate(templateName: string) {
    this.templateName = templateName;
    console.log(`assembly viewer setting the template name: ${templateName}`);
    this.showForm = true;
  }

  previewDocument(templateData: any) {
    this.templateData = templateData;
    this.documentUrl = this.assemblyService.generateDocument(this.templateName, templateData);
    this.modalTemplate.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.modalTemplate.nativeElement.style.display = 'none';
  }
}
