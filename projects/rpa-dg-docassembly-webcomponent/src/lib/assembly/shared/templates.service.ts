import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormlyFieldConfig } from "@ngx-formly/core";

const docAssemblyApiUrl: string = 'http://localhost:9000';
const uiDefinitionEndpoint: string = `${ docAssemblyApiUrl }/ui-definition`;


@Injectable()
export class TemplatesService {
  private url: string;

  constructor(private http: HttpClient) {}

  setBaseUrl(url: string) {
    this.url = url;
  }

  getBaseUrl(): string {
    return this.url;
  }

  getUIDefinition(): Observable<FormlyFieldConfig[]> {
    return this.http.get<any>(uiDefinitionEndpoint);
  }
}
