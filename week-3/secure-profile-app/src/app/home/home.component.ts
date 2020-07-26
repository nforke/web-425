/*
================================================
; Title: Assignment 3.3
; Author: Nicole Forke
; Date: 25 July 2020
; Modified By: Nicole Forke
; Description: home component
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
  isLoggedIn: Boolean;

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
   }

  ngOnInit(): void {
  }

}
