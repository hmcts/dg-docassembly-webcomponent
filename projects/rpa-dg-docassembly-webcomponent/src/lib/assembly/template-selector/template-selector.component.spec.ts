import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSelectorComponent } from './template-selector.component';
import { TemplatesService } from '../shared/templates.service';

class MockTemplatesService {
  setBaseUrl(baseUrl: string) {}
}

describe('TemplateSelectorComponent', () => {
  let component: TemplateSelectorComponent;
  let fixture: ComponentFixture<TemplateSelectorComponent>;

  const mockTemplatesService = new MockTemplatesService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSelectorComponent],
      providers: [
        { provide: TemplatesService, useFactory: () => mockTemplatesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addFile', () => {
    it('should set the url in the template service', function () {
      spyOn(mockTemplatesService, 'setBaseUrl');
      component.addFile('google', '.doc');
      expect(mockTemplatesService.setBaseUrl).toHaveBeenCalledWith('http://localhost:9000/api/templates/google.doc/uiDefinition');
    });
  });
});
