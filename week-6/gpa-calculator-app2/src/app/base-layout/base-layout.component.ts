/*
================================================================
; Title: Assignment 6.4 - Output Properties
; Author: Nicole Forke
; Date: 15 August 2020
; Modified By: Nicole Forke
; Description: Base-Layout Component
================================================================
*/
// import component
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties';
   }

  ngOnInit(): void {
  }

}
