import { Component } from '@angular/core';
import { AssemblyService } from '../shared/assembly.service';
import { FormGroup, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent {
  templates: string[] = [
    'CV-CMC-GOR-ENG-0004-UI-Test',
    'FL-FRM-APP-ENG-00002',
    'FL-FRM-GOR-ENG-00007',
    'PostponementRequestGenericTest',
    'TB-IAC-APP-ENG-00003-Template-Tornado',
    'TB-IAC-APP-ENG-00003-v0.2',
    'TB-IAC-APP-ENG-00003-v0.9-TEST-TORNADO',
    'generic-ui-definition'
  ];

  form = new FormGroup({});

  constructor(private assemblyService: AssemblyService,
              private router: Router) { }

  selectTemplate(form: NgForm) {
    this.assemblyService.templateName.next(form.value.selectedTemplate);
    this.router.navigate(['viewer']);
  }
}
