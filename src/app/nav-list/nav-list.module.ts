import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([{
      path:'',
      component:NavListComponent
    }])
  ]
})
export class NavListModule { }
