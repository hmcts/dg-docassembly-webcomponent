import { Component } from '@angular/core';
import { AssemblyService } from '../shared/assembly.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent {
  templates: string[] = ['template 1', 'template 2', 'template 3'];

  form = new FormGroup({});

  constructor(private assemblyService: AssemblyService,
              private router: Router) { }

  selectTemplate(form: NgForm) {
    this.assemblyService.templateName.next(form.value.selectedTemplate);
    this.router.navigate(['viewer']);
  }
}
