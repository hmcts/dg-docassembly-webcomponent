import {HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

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

  getTemplateUiDefinition(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url);
  }
}
