import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { JuiFormlyLibModule } from 'jui-formly-lib';
import { HttpClientModule } from '@angular/common/http';
import { FormViewerComponent } from './assembly-viewer/form-viewer/form-viewer.component';
import { DocumentViewerComponent } from './assembly-viewer/document-viewer/document-viewer.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';
import { AssemblyViewerComponent } from './assembly-viewer/assembly-viewer.component';
import { AssemblyRoutingModule } from './assembly-routing.module';
import { TemplatesService } from './shared/templates.service';


@NgModule({
  declarations: [
    AssemblyViewerComponent,
    FormViewerComponent,
    DocumentViewerComponent,
    TemplateSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    JuiFormlyLibModule,
    HttpClientModule,
    AssemblyRoutingModule
  ],
  providers: [TemplatesService],
  bootstrap: []
})
export class AssemblyModule { }
