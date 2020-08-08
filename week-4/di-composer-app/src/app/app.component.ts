/*
=======================================================================
; Title: Assignment 4.2 - Inversion of Control and Dependency Injection
; Author: Nicole Forke
; Date: 28 July 2020
; Modified By: Nicole Forke
; Description: App Component
========================================================
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
  assignment: string = 'Assignment 4.2 - Inversion of Control and Dependency Injection'
}
