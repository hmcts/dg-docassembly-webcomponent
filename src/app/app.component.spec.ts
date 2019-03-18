import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { DocumentViewerModule } from '@hmcts/document-viewer-webcomponent';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AssemblyModule } from '@hmcts/dg-docassembly-webcomponent';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        FormlyModule,
        ReactiveFormsModule,
        RouterTestingModule,
        AssemblyModule,
        DocumentViewerModule,
      ],
      providers: [TransferState]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  }));

  it('should be created', () => {
    expect(app).toBeTruthy();
  });

  it('should set the template name', () => {
    app.setTemplateName('templateName');

    expect(app.selectedTemplate).toBe('templateName');
  });

  it('should set preview data', () => {
    app.setPreviewData({
      outputFormat: 'outputFormat',
      documentUrl: 'documentUrl',
      templateData: { templateData: 'templateData' }
    });

    expect(app.outputFormat).toBe('outputFormat');
    expect(app.documentUrl).toBe('documentUrl');
    expect(app.templateData).toEqual({ templateData: 'templateData' });
  });

  it('should toggle selection', () => {
    app.toggleSelection('selectedSetup');

    expect(app.setup).toBe('selectedSetup');
  });

  it('should save template data, when json is valid', () => {
    app.templateDataString = '{"key": "value"}';
    app.saveTemplateData();

    expect(app.templateData).toEqual({ key: 'value' });
    expect(app.jsonParseErrors).toBeFalsy();
  });

  it('should populate jsonParseErrors field, when json is invalid', () => {
    app.templateDataString = '{key}';
    app.saveTemplateData();

    expect(app.templateData).toBeFalsy();
    expect(app.jsonParseErrors).toBeTruthy();
  });
});
