/*
================================================
; Title: Assignment 3.4
; Author: Nicole Forke
; Date: 26 July 2020
; Modified By: Nicole Forke
; Description: Sign In Guard
================================================
*/
// import guard
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(


    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isLoggedIn = next.queryParams.isLoggedIn

      if (isLoggedIn) {
        return true;
      }
      else {
        this.router.navigate(['/']);
        return false;
      }
  }

}
