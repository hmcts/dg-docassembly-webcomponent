import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  templates = [
    'CV-CMC-GOR-ENG-0004-UI-Test.docx',
    'FL-FRM-APP-ENG-00002.docx',
    'FL-FRM-GOR-ENG-00007.docx',
    'PostponementRequestGenericTest.docx',
    'TB-IAC-APP-ENG-00003-Template-Tornado.docx',
    'TB-IAC-APP-ENG-00003-v0.2.docx',
    'TB-IAC-APP-ENG-00003-v0.9-TEST-TORNADO.docx',
    'generic-ui-definition.docx'
  ];
  templateData: string;
  jsonParseErrors;

  get templateDataJson() {
    let jsonData = null;
    if (this.templateData) {
      try {
        jsonData = JSON.parse(this.templateData);
        this.jsonParseErrors = '';
      } catch (e) {
        this.jsonParseErrors = e.toString();
      }
    }
    return jsonData;
  }

}
