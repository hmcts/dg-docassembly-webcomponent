import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssemblyViewerComponent } from './assembly/assembly-viewer/assembly-viewer.component';
import { TemplateSelectorComponent } from './assembly/template-selector/template-selector.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'viewer', component: AssemblyViewerComponent },
      { path: '', component: TemplateSelectorComponent }
    ])
  ],
  exports: [RouterModule],
})
export class AssemblyRoutingModule {
}
