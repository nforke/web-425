/*
================================================================
; Title: Assignment 7.3 - Form Validation
; Author: Nicole Forke
; Date: 21 August 2020
; Modified By: Nicole Forke
; Description: Grade-Summary Component
================================================================
*/
// import component
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
