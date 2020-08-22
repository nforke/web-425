/*
================================================================
; Title: Assignment 7.2 - Reactive Forms
; Author: Nicole Forke
; Date: 20 August 2020
; Modified By: Nicole Forke
; Description: Base-Layout Component
================================================================
*/
// import component
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Assignment 7.2 - Reactive Forms';
   }

  ngOnInit(): void {
  }

  signOut() {
    // call cookie service
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
