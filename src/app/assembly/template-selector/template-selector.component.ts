import { Component, OnInit } from '@angular/core';
import { TemplatesService } from '../shared/templates.service';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent implements OnInit {
  // create a emun related file ~(dont know how it works for angular)
  fileType = [ '.docx', '.odt'];

  constructor(private templatesService: TemplatesService) { }

  ngOnInit() {
  }

  addFile(name: string, type: string) {
    this.templatesService.setBaseUrl('http://localhost:8080/api/templates/' + name + type + '/uiDefinition');
  }

}
