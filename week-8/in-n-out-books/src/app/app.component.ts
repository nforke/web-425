/*
================================================================
; Title: Assignment 8.2 - Server-Side Communications
; Author: Nicole Forke
; Date: 26 August 2020
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
    this.assignment="Welcome to In-N-Out-Books"
  }
}
