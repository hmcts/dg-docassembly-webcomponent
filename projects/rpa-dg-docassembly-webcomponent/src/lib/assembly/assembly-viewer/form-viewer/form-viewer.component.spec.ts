import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViewerComponent } from './form-viewer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AssemblyService } from '../../shared/assembly.service';
import { of } from 'rxjs';

class MockAssemblyService {
  getUIDefinition() {
  }
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
      declarations: [FormViewerComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: AssemblyService, useFactory: () => mockAssemblyService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormViewerComponent);
    component = fixture.componentInstance;
    spyOn(mockAssemblyService, 'getUIDefinition').and.returnValue(of(uiDefintion));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
