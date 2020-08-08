/*
================================================================
; Title: Assignment 5.3 - Data Types
; Author: Nicole Forke
; Date: 08 August 2020
; Modified By: Nicole Forke
; Description: Contact Component (contact page)
================================================================
*/
// import component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment="Assignment 5.3 - Data Tables"
  }
}
