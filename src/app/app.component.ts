import { Component } from '@angular/core';
import { templateData, templates } from './template-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  templates = templates;
  templateData = templateData;
  selectedTemplate: string;

  jsonParseErrors;

  templateDataJson = {};

  setTemplateName(templateName: string) {
    this.selectedTemplate = templateName;
  }

  saveTemplateData() {
    let jsonData = {};
    if (this.templateData) {
      try {
        jsonData = JSON.parse(this.templateData);
        this.jsonParseErrors = '';
      } catch (e) {
        this.jsonParseErrors = e.toString();
      }
    }
    this.templateDataJson = jsonData;
  }

}
