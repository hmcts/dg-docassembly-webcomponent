import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssemblyViewerComponent } from './assembly-viewer/assembly-viewer.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';

const routes: Routes = [
  { path: 'viewer', component: AssemblyViewerComponent },
  { path: '', component: TemplateSelectorComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AssemblyRoutingModule { }
