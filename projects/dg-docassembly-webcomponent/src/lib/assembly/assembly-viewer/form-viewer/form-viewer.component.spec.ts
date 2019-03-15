import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViewerComponent } from './form-viewer.component';
import { AssemblyService } from '../../shared/assembly.service';
import { of } from 'rxjs';
import { FormatSelectorComponent } from './format-selector/format-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { GovukFormlyTemplatesModule } from '@hmcts/govuk-formly-templates';
import { FormErrorComponent } from './form-error.component';

class MockAssemblyService {
  getUIDefinition() {}
}

describe('FormViewerComponent', () => {
  let component: FormViewerComponent;
  let fixture: ComponentFixture<FormViewerComponent>;

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
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
