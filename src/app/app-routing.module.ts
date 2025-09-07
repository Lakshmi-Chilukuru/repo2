import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavListComponent } from './nav-list/nav-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'nav-list',
    component:NavListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
