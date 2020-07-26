/*
================================================
; Title: Assignment 3.3
; Author: Nicole Forke
; Date: 25 July 2020
; Modified By: Nicole Forke
; Description: sign-in component
================================================
*/
// import over component
import { Component, OnInit } from '@angular/core';
// import over routes
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // define function called signin
  signin() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
