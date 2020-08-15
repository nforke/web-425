/*
================================================================
; Title: Assignment 6.2 - Output Properties
; Author: Nicole Forke
; Date: 15 August 2020
; Modified By: Nicole Forke
; Description: App Component
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
    this.assignment="Assignment 6.2 - Input/Output Properties, Part 1"
  }
}
