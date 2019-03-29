import { AfterViewChecked, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { templateDataString, templates } from './template-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {

  constructor(private cdRef:ChangeDetectorRef) {}

  templates = templates;
  templateDataString = templateDataString;
  templateData: {};
  selectedTemplate: string;
  documentUrl: string;
  outputFormat: string;

  setup = 'integrated';

  jsonParseErrors;

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
    }
  }

  tabStyle(tab: string) {
    return `govuk-tabs__panel ${this.setup !== tab ? 'govuk-tabs__panel--hidden' : ''}`;
  }

  tabLinkStyle(tab: string) {
    return `govuk-tabs__tab ${this.setup == tab ? 'govuk-tabs__tab--selected' : ''}`;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
