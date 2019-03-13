import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-format-selector',
  templateUrl: './format-selector.component.html'
})
export class FormatSelectorComponent {
  @Input() outputFormats: string[];
  @Output() formatSelected = new EventEmitter<string>();

  form = new FormGroup({});

  constructor() {}

  selectOutputFormat(outputFormat: string) {
    this.formatSelected.emit(outputFormat);
  }
}
