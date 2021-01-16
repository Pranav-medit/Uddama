import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../app/components/admin/admin.component';
import { CkEditorComponent } from './components/ck-editor/ck-editor.component';
import { HomeComponent } from './components/home/home.component';

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
    component: CkEditorComponent
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
