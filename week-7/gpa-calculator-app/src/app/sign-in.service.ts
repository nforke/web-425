/*
================================================================
; Title: Assignment 7.3 - Form Validation
; Author: Nicole Forke
; Date: 21 August 2020
; Modified By: Nicole Forke
; Description: Sign-In Service
================================================================
*/
// import Injectable service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    // populate the array with values
    this.studentIds = [
      1007,
      1008,
      1009,
      1010,
      1011,
      1012
    ]
   }
   // validate function
   validate(studentId: number) {
     return this.studentIds.some(id => id === studentId);
   }
}
