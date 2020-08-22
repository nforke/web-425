/*
================================================================
; Title: Assignment 7.2 - Reactive Forms
; Author: Nicole Forke
; Date: 20 August 2020
; Modified By: Nicole Forke
; Description: GPA Component
================================================================
*/
// import component
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input()gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
