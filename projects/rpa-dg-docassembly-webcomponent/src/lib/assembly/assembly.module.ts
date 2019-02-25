import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { HttpClientModule } from '@angular/common/http';
import { FormViewerComponent } from './assembly-viewer/form-viewer/form-viewer.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';
import { AssemblyViewerComponent } from './assembly-viewer/assembly-viewer.component';
import { AssemblyRoutingModule } from './assembly-routing.module';
import { TemplatesService } from './shared/templates.service';
import { JuiFormlyLibModule } from "jui-formly-lib";


@NgModule({
  declarations: [
    AssemblyViewerComponent,
    FormViewerComponent,
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
