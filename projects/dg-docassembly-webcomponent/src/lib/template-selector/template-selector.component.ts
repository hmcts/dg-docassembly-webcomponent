import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html'
})
export class TemplateSelectorComponent {
  @Input() templates: string[];
  @Output() selectedTemplate = new EventEmitter<string>();

  form = new FormGroup({});

  constructor() {}

  selectOutputFormat(templateName: string) {
    this.selectedTemplate.emit(templateName);
  }
}
