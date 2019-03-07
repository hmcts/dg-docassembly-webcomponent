
import { FormViewerComponent } from './assembly/assembly-viewer/form-viewer/form-viewer.component';
import { TemplateSelectorComponent } from './assembly/template-selector/template-selector.component';
import { AssemblyViewerComponent } from './assembly/assembly-viewer/assembly-viewer.component';
import { AssemblyService } from './assembly/shared/assembly.service';
import { GovukFormlyTemplatesModule } from 'govuk-formly-templates';
import { HmctsEmViewerUiModule } from '@hmcts/annotation-ui-lib';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AssemblyViewerComponent,
    FormViewerComponent,
    TemplateSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    GovukFormlyTemplatesModule,
    HttpClientModule,
    HmctsEmViewerUiModule
  ],
  exports: [AssemblyViewerComponent],
  providers: [AssemblyService]
})
export class AssemblyModule {}
