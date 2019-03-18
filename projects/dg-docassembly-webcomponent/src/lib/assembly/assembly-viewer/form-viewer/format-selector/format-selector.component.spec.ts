import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatSelectorComponent } from './format-selector.component';
import { FormsModule } from '@angular/forms';

describe('FormatSelectorComponent', () => {
  let component: FormatSelectorComponent;
  let fixture: ComponentFixture<FormatSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormatSelectorComponent],
      imports: [FormsModule]
    })
    .compileComponents();


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should select output format', () => {
    spyOn(component.formatSelected, 'emit');
    component.selectOutputFormat('pdf');

    expect(component.formatSelected.emit).toHaveBeenCalledWith('pdf');
  });
});
