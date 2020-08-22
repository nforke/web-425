/*
================================================================
; Title: Assignment 7.2 - Reactive Forms
; Author: Nicole Forke
; Date: 20 August 2020
; Modified By: Nicole Forke
; Description: Sign-In Component
================================================================
*/
// import statements
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  // add references in constructor for SignInService, Router, FormBuilder, FormGroup and CookieService
  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {

   }

  ngOnInit(): void {
    // create new FormGroup with on FormControl
    this.signinForm = this.fb.group({
      studentId: ''
    });
  }

  // function to get studentId value from studentId FormControl
  onSubmit() {

    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {

      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate([ '/' ])

    }else {
      this.errorMessage = 'The student ID you entered is invalid, please try again.';
    }
  }
}
