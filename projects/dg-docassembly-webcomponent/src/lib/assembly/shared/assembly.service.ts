import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { catchError, map } from 'rxjs/operators';

const uiDefinitionEndpoint = `api/form-definitions`;
const generateDocumentEndpoint = `api/template-renditions`;

export const  ERROR = '--error--';

@Injectable()
export class AssemblyService {

  constructor(private http: HttpClient) {}

  getUIDefinition(templateName: string): Observable<FormlyFieldConfig[]> {
    const encTemplateId = btoa(templateName);
    return this.http.get<any>(`${uiDefinitionEndpoint}/${encTemplateId}`)
      .pipe(
        catchError(this.handleError('getUIDefinition', []))
      );
  }

  generateDocument(outputFormat: string, templateName: string, templateData: any, documentUrl: string): Observable<string> {
    const requestBody = {
      formPayload: templateData,
      outputType: outputFormat.toLowerCase(),
      templateId: btoa(templateName),
      renditionOutputLocation: documentUrl
    };

    return this.http.post<any>(generateDocumentEndpoint, requestBody)
      .pipe(
        map(body => {
          return body.renditionOutputLocation;
        }),
        catchError(this.handleError('generateDocument', ERROR))
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
