import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSelectorComponent } from './template-selector.component';
import { FormsModule } from '@angular/forms';
import { AssemblyService } from '../shared/assembly.service';

class MockAssemblyService {
  getUIDefinition() {}
  generateDocument() {}
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
      ],
      imports: [FormsModule]
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
});
