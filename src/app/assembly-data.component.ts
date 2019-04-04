import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assembly-data',
  template: `
        <table class="govuk-table">
          <caption class="govuk-table__caption">Assembly Data</caption>
          <tbody class="govuk-table__body">
          <tr class="govuk-table__row">
            <th class="govuk-table__header" scope="row">template name</th>
            <td class="govuk-table__cell">{{ templateName }}</td>
          </tr>
          <tr class="govuk-table__row">
            <th class="govuk-table__header" scope="row">document URL</th>
            <td class="govuk-table__cell">{{ documentUrl }}</td>
          </tr>
          <tr class="govuk-table__row">
            <th class="govuk-table__header" scope="row">output format</th>
            <td class="govuk-table__cell">{{ outputFormat }}</td>
          </tr>
          <tr class="govuk-table__row">
            <th class="govuk-table__header" scope="row">template data</th>
            <td class="govuk-table__cell">{{ stringifiedTemplateData() }}</td>
          </tr>
          </tbody>
        </table>
  `
})
export class AssemblyDataComponent {

  @Input() templateName: string;
  @Input() documentUrl: string;
  @Input() outputFormat: string;
  @Input() templateData: string;

  constructor() {}

  stringifiedTemplateData() {
    return this.templateData ? JSON.stringify(this.templateData) : '';
  }
}
