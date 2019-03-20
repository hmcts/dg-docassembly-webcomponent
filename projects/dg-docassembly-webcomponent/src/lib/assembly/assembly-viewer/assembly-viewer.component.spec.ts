import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { GovukFormlyTemplatesModule } from '@hmcts/govuk-formly-templates';
import { AssemblyViewerComponent } from './assembly-viewer.component';
import { FormViewerComponent } from './form-viewer/form-viewer.component';
import { FormatSelectorComponent } from './form-viewer/format-selector/format-selector.component';
import { AssemblyService } from '../service/assembly.service';
import { DocumentViewerModule } from '@hmcts/document-viewer-webcomponent';
import { FormErrorComponent } from './form-viewer/form-error.component';

class MockAssemblyService {
  getUIDefinition() {}
}

describe('AssemblyViewerComponent', () => {
  let component: AssemblyViewerComponent;
  let fixture: ComponentFixture<AssemblyViewerComponent>;

  const mockAssemblyService = new MockAssemblyService();

  const uiDefintion = [
    {
      'key': 'caseReference',
      'type': 'input',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Case reference',
        'options': []
      },
      'fieldArray': null
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AssemblyViewerComponent,
        FormViewerComponent,
        FormatSelectorComponent,
        FormErrorComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule,
        GovukFormlyTemplatesModule,
        DocumentViewerModule
      ],
      providers: [
        { provide: AssemblyService, useFactory: () => mockAssemblyService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyViewerComponent);
    component = fixture.componentInstance;
    component.outputFormats = ['PDF'];
    spyOn(mockAssemblyService, 'getUIDefinition').and.returnValue(of(uiDefintion));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set preview data', () => {
    const previewData = {
      templateData: { data: 'data'},
      documentUrl: 'document-url',
      outputFormat: 'pdf'
    };
    component.setPreviewData(previewData);

    expect(component.templateData).toEqual(previewData.templateData);
    expect(component.documentUrl).toEqual(previewData.documentUrl);
    expect(component.outputFormat).toEqual(previewData.outputFormat);
  });

  it('should show modal', () => {
    component.showModal();

    expect(component.modalTemplate.nativeElement.style.display).toEqual('block');
  });

  it('should show modal', () => {
    component.closeModal();

    expect(component.modalTemplate.nativeElement.style.display).toEqual('none');
  });
});
