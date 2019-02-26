import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AssemblyModule } from 'rpa-dg-docassembly-webcomponent';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AssemblyModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/assembly', pathMatch: 'full' },
      { path: 'assembly', loadChildren: () => AssemblyModule }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
