/*
================================================
; Title: Assignment 3.3
; Author: Nicole Forke
; Date: 25 July 2020
; Modified By: Nicole Forke
; Description: routing
================================================
*/
// import over routes
import { Routes } from '@angular/router';
// import over home component
import { HomeComponent } from './home/home.component';
// import over sign-in component
import { SignInComponent } from './sign-in/sign-in.component';


// export for app routes
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
