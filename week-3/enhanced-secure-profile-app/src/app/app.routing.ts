/*
================================================
; Title: Assignment 3.4
; Author: Nicole Forke
; Date: 26 July 2020
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
// import over the SignInGuard
import { SignInGuard } from './sign-in.guard';

// export components
export const AppRoutes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [SignInGuard]
    }
]
