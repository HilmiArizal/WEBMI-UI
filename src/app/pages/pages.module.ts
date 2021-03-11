import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { material } from '../material/material';
// import { NavbarComponent } from '../components/navbar/navbar.component';
// import {  } from '@angular/core';



@NgModule({
  declarations: [
    HomeComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    material
  ]
})
export class PagesModule { }
