/*
======================================
; Title: Assignment 1.5
; Author: Nicole Forke
; Date: 11 July 2020
; Modified By: Nicole Forke
; Description: Profile-App Application
======================================
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
  assignment: string = 'Assignment 1.5 - Components';
}
