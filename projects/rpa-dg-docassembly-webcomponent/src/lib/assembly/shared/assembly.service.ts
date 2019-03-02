import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map } from 'rxjs/operators';

const docAssemblyApiUrl = 'http://localhost:9000';
const uiDefinitionEndpoint = `${ docAssemblyApiUrl }/api/form-definitions`;
const generateDocumentEndpoint = `${ docAssemblyApiUrl }/api/template-renditions`;


@Injectable()
export class AssemblyService {

  constructor(private http: HttpClient) {}

  getUIDefinition(templateName: string): Observable<FormlyFieldConfig[]> {
    const encTemplateId = btoa(templateName);
    return this.http.get<any>(`${uiDefinitionEndpoint}/${encTemplateId}`);
  }

  generateDocument(templateName: string, templateData: any): Observable<string> {
    const requestBody = {
      formPayload: templateData,
      outputType: 'PDF',
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
