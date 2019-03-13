import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map } from 'rxjs/operators';

const uiDefinitionEndpoint = `api/form-definitions`;
const generateDocumentEndpoint = `api/template-renditions`;


@Injectable()
export class AssemblyService {

  constructor(private http: HttpClient) {}

  getUIDefinition(templateName: string): Observable<FormlyFieldConfig[]> {
    const encTemplateId = btoa(templateName);
    return this.http.get<any>(`${uiDefinitionEndpoint}/${encTemplateId}`);
  }

  generateDocument(outputFormat: string, templateName: string, templateData: any): Observable<string> {
    const requestBody = {
      formPayload: templateData,
      outputType: outputFormat,
      templateId: btoa(templateName)
    };

    return this.http.post<any>(generateDocumentEndpoint, requestBody)
      .pipe(
        map(body => {
          return body.renditionOutputLocation;
        })
      );
  }
}
