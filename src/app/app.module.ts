import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AssemblyModule } from './assembly/assembly.module';

const routes: Routes = [
  { path: '', redirectTo: '/assembly', pathMatch: 'full' },
  { path: 'assembly', loadChildren: () => AssemblyModule }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
