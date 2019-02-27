import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormlyFieldConfig } from "@ngx-formly/core";

const docAssemblyApiUrl: string = 'http://localhost:9000';
const uiDefinitionEndpoint: string = `${ docAssemblyApiUrl }/api/form-definition`;


@Injectable()
export class TemplatesService {

  templateName = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  getUIDefinition(): Observable<FormlyFieldConfig[]> {
    return this.http.get<any>(`${uiDefinitionEndpoint}/${this.templateName.getValue()}`);
  }
}
