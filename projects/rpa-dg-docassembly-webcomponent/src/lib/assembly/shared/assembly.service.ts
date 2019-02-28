import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormlyFieldConfig } from "@ngx-formly/core";
import { map } from "rxjs/operators";

const docAssemblyApiUrl: string = 'http://localhost:9000';
const uiDefinitionEndpoint: string = `${ docAssemblyApiUrl }/api/form-definitions`;
const generateDocumentEndpoint: string = `${ docAssemblyApiUrl }/api/template-renditions`;


@Injectable()
export class AssemblyService {

  templateName = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  getUIDefinition(): Observable<FormlyFieldConfig[]> {
    const encTemplateId = btoa(this.templateName.getValue());
    return this.http.get<any>(`${uiDefinitionEndpoint}/${encTemplateId}`);
  }

  generateDocument(documentData: any): Observable<string> {
    const requestBody = {
      formPayload: documentData,
      outputType: { fileExtension: ".pdf", mediaType: "application/pdf" },
      templateId: btoa(this.templateName.getValue())
    };

    return this.http.post<any>(generateDocumentEndpoint, requestBody)
      .pipe(
        map(body => {
          return body.renditionOutputLocation;
        })
      );
  }
}
