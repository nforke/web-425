/*
================================================
; Title: Assignment 2.3
; Author: Nicole Forke
; Date: 18 July 2020
; Modified By: Nicole Forke
; Description: About Component
================================================
*/

// import component
import { Component, OnInit } from '@angular/core';


// export component
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
