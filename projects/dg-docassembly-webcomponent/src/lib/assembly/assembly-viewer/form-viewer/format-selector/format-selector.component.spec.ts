import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatSelectorComponent } from './format-selector.component';
import { AssemblyService } from '../../../shared/assembly.service';
import { FormsModule } from '@angular/forms';

class MockAssemblyService {
  getUIDefinition() {}
  generateDocument() {}
}

describe('FormatSelectorComponent', () => {
  let component: FormatSelectorComponent;
  let fixture: ComponentFixture<FormatSelectorComponent>;

  const mockAssemblyService = new MockAssemblyService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormatSelectorComponent],
      providers: [
        { provide: AssemblyService, useFactory: () => mockAssemblyService }
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
