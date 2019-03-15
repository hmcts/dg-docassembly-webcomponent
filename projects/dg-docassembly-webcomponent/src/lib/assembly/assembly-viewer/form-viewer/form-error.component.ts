import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-error',
  template: `
    <div class="govuk-error-summary" aria-labelledby="error-summary-title"role="alert" tabindex="-1" data-module="error-summary">
      <h2 class="govuk-error-summary__title" id="error-summary-title">{{ title }}</h2>
      <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            <a href="#">{{ message }}</a>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class FormErrorComponent {

  @Input() title: string;
  @Input() message: string;

  constructor() {}
}
