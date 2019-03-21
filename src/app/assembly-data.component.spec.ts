import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssemblyDataComponent } from "./assembly-data.component";


describe('AssemblyDataComponent', () => {
  let component: AssemblyDataComponent;
  let fixture: ComponentFixture<AssemblyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssemblyDataComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
