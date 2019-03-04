import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  templates = [
    'CV-CMC-GOR-ENG-0004-UI-Test',
    'FL-FRM-APP-ENG-00002',
    'FL-FRM-GOR-ENG-00007',
    'PostponementRequestGenericTest',
    'TB-IAC-APP-ENG-00003-Template-Tornado',
    'TB-IAC-APP-ENG-00003-v0.2',
    'TB-IAC-APP-ENG-00003-v0.9-TEST-TORNADO',
    'generic-ui-definition'
  ];
  templateData = {};
}
