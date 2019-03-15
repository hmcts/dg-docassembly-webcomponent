import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormatSelectorComponent } from '../../projects/dg-docassembly-webcomponent/src/lib/assembly/assembly-viewer/form-viewer/format-selector/format-selector.component';
import { AssemblyViewerComponent } from '../../projects/dg-docassembly-webcomponent/src/lib/assembly/assembly-viewer/assembly-viewer.component';
import { FormViewerComponent } from '../../projects/dg-docassembly-webcomponent/src/lib/assembly/assembly-viewer/form-viewer/form-viewer.component';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { DocumentViewerModule } from '@hmcts/document-viewer-webcomponent';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AssemblyService } from '../../projects/dg-docassembly-webcomponent/src/lib/assembly/shared/assembly.service';
import { TemplateSelectorComponent } from '../../projects/dg-docassembly-webcomponent/src/lib/template-selector/template-selector.component';
import { FormErrorComponent } from '../../projects/dg-docassembly-webcomponent/src/lib/assembly/assembly-viewer/form-viewer/form-error.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AssemblyViewerComponent,
        FormatSelectorComponent,
        FormErrorComponent,
        FormViewerComponent,
        TemplateSelectorComponent
      ],
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        FormlyModule,
        ReactiveFormsModule,
        RouterTestingModule,
        DocumentViewerModule,
      ],
      providers: [AssemblyService, TransferState]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set the template name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.setTemplateName('templateName');
    expect(app.selectedTemplate).toBe('templateName');
  });

  it('should preview data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.setPreviewData({ outputFormat: 'outputFormat', documentUrl: 'documentUrl', templateData: {templateData:'templateData'}});
    expect(app.outputFormat).toBe('outputFormat');
    expect(app.documentUrl).toBe('documentUrl');
    expect(app.templateData).toEqual({templateData:'templateData'});
  });
});
