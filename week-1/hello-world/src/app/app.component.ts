/*
======================================
; Title: Assignment 1.3
; Author: Nicole Forke
; Date: 10 July 2020
; Modified By: Nicole Forke
; Description: Hello-World Application
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
  myWorld = "You are now in Nicole's world!!"
}
