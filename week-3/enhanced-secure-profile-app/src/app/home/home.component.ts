/*
================================================
; Title: Assignment 3.4
; Author: Nicole Forke
; Date: 26 July 2020
; Modified By: Nicole Forke
; Description: Home Component
================================================
*/
// import component
import { Component, OnInit } from '@angular/core';
// import over activated route
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }

}
