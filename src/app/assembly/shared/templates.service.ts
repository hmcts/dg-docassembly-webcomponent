import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getTemplateUiDefinition() {
    console.log(this.url);
    return this.http.get(this.url);
  }
}
