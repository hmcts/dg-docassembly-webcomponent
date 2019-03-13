
import { FormViewerComponent } from './assembly/assembly-viewer/form-viewer/form-viewer.component';
import { FormatSelectorComponent } from './assembly/assembly-viewer/form-viewer/format-selector/format-selector.component';
import { AssemblyViewerComponent } from './assembly/assembly-viewer/assembly-viewer.component';
import { AssemblyService } from './assembly/shared/assembly.service';
import { GovukFormlyTemplatesModule } from '@hmcts/govuk-formly-templates';
import { DocumentViewerModule } from '@hmcts/document-viewer-webcomponent';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AssemblyViewerComponent,
    FormViewerComponent,
    FormatSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    GovukFormlyTemplatesModule,
    HttpClientModule,
    DocumentViewerModule
  ],
  exports: [AssemblyViewerComponent],
  providers: [AssemblyService]
})
export class AssemblyModule {}
