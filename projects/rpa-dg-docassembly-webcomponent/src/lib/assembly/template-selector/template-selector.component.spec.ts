import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSelectorComponent } from './template-selector.component';
import { AssemblyService } from '../shared/assembly.service';

class MockAssemblyService {
  setBaseUrl(baseUrl: string) {}
}

describe('TemplateSelectorComponent', () => {
  let component: TemplateSelectorComponent;
  let fixture: ComponentFixture<TemplateSelectorComponent>;

  const mockAssemblyService = new MockAssemblyService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSelectorComponent],
      providers: [
        { provide: AssemblyService, useFactory: () => mockAssemblyService }
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
      spyOn(mockAssemblyService, 'setBaseUrl');
      component.addFile('google', '.doc');
      expect(mockAssemblyService.setBaseUrl).toHaveBeenCalledWith('http://localhost:9000/api/templates/google.doc/uiDefinition');
    });
  });
});
