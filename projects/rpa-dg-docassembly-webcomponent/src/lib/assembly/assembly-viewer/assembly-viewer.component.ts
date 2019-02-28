import { Component } from '@angular/core';
import { AssemblyService } from "../shared/assembly.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-assembly-viewer',
  templateUrl: './assembly-viewer.component.html'
})
export class AssemblyViewerComponent {
  showPreview: boolean = false;
  documentUrl: Observable<string>;

  constructor(private assemblyService: AssemblyService) {}

  previewDocument(documentData: any) {
    this.showPreview = true;
    this.documentUrl = this.assemblyService.generateDocument(documentData);
  }
}
