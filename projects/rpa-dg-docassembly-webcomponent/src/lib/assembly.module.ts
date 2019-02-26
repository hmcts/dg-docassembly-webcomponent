import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { HttpClientModule } from '@angular/common/http';
import { FormViewerComponent } from './assembly/assembly-viewer/form-viewer/form-viewer.component';
import { TemplateSelectorComponent } from './assembly/template-selector/template-selector.component';
import { AssemblyViewerComponent } from './assembly/assembly-viewer/assembly-viewer.component';
import { TemplatesService } from './assembly/shared/templates.service';
import { GovukFormlyTemplatesModule } from "govuk-formly-templates";
import { AssemblyRoutingModule } from "./assembly-routing.module";


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
    GovukFormlyTemplatesModule,
    AssemblyRoutingModule,
    HttpClientModule
  ],
  providers: [TemplatesService]
})
export class AssemblyModule {}
