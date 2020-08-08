/*
================================================================
; Title: Assignment 4.3 - Handling Form Events with Observables
; Author: Nicole Forke
; Date: 30 July 2020
; Modified By: Nicole Forke
; Description: App routing module
================================================================
*/

// import routes and root module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

// configure routes
const routes: Routes = [
  { path: '', component: ComposerListComponent},
  { path: 'composer-list', component: ComposerListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
