/*
================================================================
; Title: Bob's Computer Repair
; Author: Nicole Forke
; Date: 30 August 2020
; Modified By: Nicole Forke
; Description: App Component
================================================================
*/
// component imports
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  constructor() {
    this.title="Bob's Computer Repair Shop"
  }
}
