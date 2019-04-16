import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViewerComponent } from './form-viewer.component';
import { AssemblyService, ERROR } from '../../service/assembly.service';
import { of } from 'rxjs';
import { FormatSelectorComponent } from './format-selector/format-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { GovukFormlyTemplatesModule } from '@hmcts/govuk-formly-templates';
import { FormErrorComponent } from './form-error.component';
import Spy = jasmine.Spy;
import { SimpleChange, SimpleChanges } from '@angular/core';

class MockAssemblyService {
  getUIDefinition() {}
  generateDocument() {}
}

describe('FormViewerComponent', () => {
  let component: FormViewerComponent;
  let fixture: ComponentFixture<FormViewerComponent>;

  const mockAssemblyService = new MockAssemblyService();
  const changes = {
    templateName : new SimpleChange(undefined, 'template-name', true)
  } as SimpleChanges;

  const uiDefintion = [{
    'key': 'caseReference',
    'type': 'input',
    'templateOptions': {
      'label': 'Case reference',
      'options': []
    }
  }] as FormlyFieldConfig[];

  let generateDocumentSpy: Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormViewerComponent,
        FormatSelectorComponent,
        FormErrorComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule,
        GovukFormlyTemplatesModule
      ],
      providers: [
        { provide: AssemblyService, useFactory: () => mockAssemblyService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormViewerComponent);
    component = fixture.componentInstance;
    component.outputFormats = ['PDF'];
    spyOn(mockAssemblyService, 'getUIDefinition').and.returnValue(of(uiDefintion));
    generateDocumentSpy = spyOn(mockAssemblyService, 'generateDocument');
    fixture.detectChanges();
    component.ngOnChanges(changes);
    fixture.detectChanges();
  });

  it('should be created and initialised with ui definition', async(() => {
    component.uiDefinition.subscribe(resp => {
      expect(resp).toEqual(uiDefintion);
    });
  }));

  it('should set output format', () => {
    component.setOutputFormat('pdf');

    expect(component.outputFormat).toEqual('pdf');
  });

  it('should successfully generate document and preview', async(() => {
    generateDocumentSpy.and.returnValue(of('document-url'));
    spyOn(component.previewDocument, 'emit');
    fixture.detectChanges();

    component.onPreview({});

    expect(component.previewDocument.emit).toHaveBeenCalledWith({
      templateData: undefined,
      documentUrl: 'document-url',
      outputFormat: 'PDF'
    });
  }));

  it('should successfully generate document and preview', async(() => {
    generateDocumentSpy.and.returnValue(of(ERROR));
    spyOn(component.previewDocument, 'emit');
    fixture.detectChanges();

    component.onPreview({});

    expect(component.documentUrl).toBeFalsy();
    expect(component.error).toEqual(ERROR);
    expect(component.previewDocument.emit).not.toHaveBeenCalled();
  }));

});
