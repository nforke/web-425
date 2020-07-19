/*
================================================
; Title: Assignment 2.3
; Author: Nicole Forke
; Date: 18 July 2020
; Modified By: Nicole Forke
; Description: App Routing
================================================
*/

// import routes and root module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// configure routes
const routes: Routes = [
  { path: '', component: ComposerListComponent},
  { path: 'composer-list', component: ComposerListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
