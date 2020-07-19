/*
================================================
; Title: Assignment 2.3
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
  assignment: string = 'Assignment 2.4 - Routing in Action'
}
