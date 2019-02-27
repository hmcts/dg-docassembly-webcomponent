import { Component } from '@angular/core';
import { TemplatesService } from '../shared/templates.service';
import { FormGroup, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent {
  templates: string[] = ['template 1', 'template 2', 'template 3'];

  form = new FormGroup({});

  constructor(private templatesService: TemplatesService,
              private router: Router) { }

  selectTemplate(form: NgForm) {
    this.templatesService.templateName.next(form.value.selectedTemplate);
    this.router.navigate(['viewer']);
  }
}
