import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TemplateSelectorComponent } from '../../projects/rpa-dg-docassembly-webcomponent/src/lib/assembly/template-selector/template-selector.component';
import { AssemblyViewerComponent } from '../../projects/rpa-dg-docassembly-webcomponent/src/lib/assembly/assembly-viewer/assembly-viewer.component';
import { FormViewerComponent } from '../../projects/rpa-dg-docassembly-webcomponent/src/lib/assembly/assembly-viewer/form-viewer/form-viewer.component';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { HmctsEmViewerUiModule } from '@hmcts/annotation-ui-lib';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AssemblyService } from '../../projects/rpa-dg-docassembly-webcomponent/src/lib/assembly/shared/assembly.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AssemblyViewerComponent,
        TemplateSelectorComponent,
        FormViewerComponent
      ],
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        FormlyModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HmctsEmViewerUiModule,
      ],
      providers: [AssemblyService, TransferState]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
