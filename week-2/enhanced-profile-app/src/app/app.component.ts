/*
================================================
; Title: Assignment 1.5
; Author: Nicole Forke
; Date: 18 July 2020
; Modified By: Nicole Forke
; Description: App Component
================================================
*/

// component import
import { Component } from '@angular/core';

// export component and variables
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}
