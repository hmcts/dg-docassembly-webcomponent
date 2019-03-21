import { Component, ViewChild } from '@angular/core';
import { templateDataString, templates } from './template-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  templates = templates;
  templateDataString = templateDataString;
  templateData: {};
  selectedTemplate: string;
  documentUrl: string;
  outputFormat: string;

  setup = 'integrated';

  jsonParseErrors;
  showAssemblyData = false;

  @ViewChild('assemblyComponent')
  private assemblyComponent: any;

  setTemplateName(templateName: string) {
    this.selectedTemplate = templateName;
  }

  setPreviewData({ outputFormat, documentUrl, templateData }) {
    this.documentUrl = documentUrl;
    this.outputFormat = outputFormat;
    this.templateData = templateData;
  }

  toggleSelection(selectedSetup: string) {
    this.setup = selectedSetup;
  }

  saveTemplateData() {
    if (this.templateDataString) {
      try {
        this.templateData = JSON.parse(this.templateDataString);
        this.jsonParseErrors = '';
      } catch (error) {
        this.jsonParseErrors = error.toString();
      }
    }
  }

  getAssemblyData() {
    if (this.assemblyComponent) {
      this.documentUrl = this.assemblyComponent.documentUrl;
      this.outputFormat = this.assemblyComponent.outputFormat;
      this.templateData = this.assemblyComponent.templateData;
      console.log(`this is data from the ${this.documentUrl}`)
    }
  }
}
