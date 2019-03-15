import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-format-selector',
  templateUrl: './format-selector.component.html'
})
export class FormatSelectorComponent {
  @Input() outputFormats: string[];
  @Output() formatSelected = new EventEmitter<string>();

  constructor() {}

  selectOutputFormat(outputFormat: string) {
    this.formatSelected.emit(outputFormat);
  }
}
