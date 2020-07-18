/*
======================================
; Title: Assignment 2.2
; Author: Nicole Forke
; Date: 16 July 2020
; Modified By: Nicole Forke
; Description: My-App Navigation
======================================
*/

// import module
import { NgModule } from '@angular/core';

// import routes
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// configure routes
const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

// export modules
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
