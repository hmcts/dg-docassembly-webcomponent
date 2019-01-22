import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViewerComponent } from './form-viewer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TemplatesService } from '../../shared/templates.service';
import { of } from 'rxjs';

class MockTemplatesService {
  getTemplateUiDefinition() {}
}

describe('FormViewerComponent', () => {
  let component: FormViewerComponent;
  let fixture: ComponentFixture<FormViewerComponent>;

  const mockTemplatesService = new MockTemplatesService();

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
      declarations: [ FormViewerComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: TemplatesService, useFactory: () => mockTemplatesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormViewerComponent);
    component = fixture.componentInstance;
    spyOn(mockTemplatesService, 'getTemplateUiDefinition').and.returnValue(of(uiDefintion));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe from template service', function () {
      spyOn(component['formFieldsSub'], 'unsubscribe');
      component.ngOnDestroy();
      expect(component['formFieldsSub'].unsubscribe).toHaveBeenCalled();
    });
  });

  describe('onPreview', () => {
    it('should console log input from the input fields', function () {
      spyOn(console, 'log');
      component.onPreview();
      expect(console.log).toHaveBeenCalled();
    });
  });
});
