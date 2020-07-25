/*
========================================================
; Title: Assignment 3.2 - Passing Data to Routes, Part 1
; Author: Nicole Forke
; Date: 24 July 2020
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
  assignment: string = 'Assignment 3.2 - Passing Data to Routes, Part 1'
}
