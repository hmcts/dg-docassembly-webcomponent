import { Component, OnInit } from '@angular/core';
import { TemplatesService } from '../shared/templates.service';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent implements OnInit {
  templates: string[] = ['template 1', 'template 2', 'template 3'];

  constructor(private templatesService: TemplatesService) { }

  ngOnInit() {
  }

  selectTemplate(selectedTemplate: string) {
    console.log('Here we need to pass the selected template to the assembly component');
  }
}
