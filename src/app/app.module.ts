import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormViewerComponent } from './form-viewer/form-viewer.component';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormViewerComponent,
    DocumentViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
