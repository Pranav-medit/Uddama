import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../app/components/admin/admin.component';
import { CardComponent } from './components/card/card.component';
import { CkEditorComponent } from './components/ck-editor/ck-editor.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { SynopsisComponent } from './components/synopsis/synopsis.component';

const routes: Routes = [
  {
    path:'Admin',
    component: AdminComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'SetProfile',
    component: FormBuilderComponent
  },
  {
    path: 'Synopsis',
    component: SynopsisComponent
  },
  {
    path: 'SynopsisList',
    component: LandingComponent
  },
  {
    path:'',
    redirectTo: 'Home', pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
