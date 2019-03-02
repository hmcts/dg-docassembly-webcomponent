import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent {
  @Input() templates: string[];
  @Output() templateSelected = new EventEmitter<string>();

  form = new FormGroup({});

  constructor() {}

  selectTemplate(form: NgForm) {
    this.templateSelected.emit(form.value.selectedTemplate);
  }
}
