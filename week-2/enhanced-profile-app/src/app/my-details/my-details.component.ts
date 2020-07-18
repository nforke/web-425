/*
================================================
; Title: Assignment 2.3
; Author: Nicole Forke
; Date: 18 July 2020
; Modified By: Nicole Forke
; Description: my-details-component
================================================
*/

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]
// assign the passed-in parameters to the class fields
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  // define a new variable called myProfile with a data type of Person
  myProfile: Person;

  // pass-in actual values
  constructor() {
    this.myProfile = new Person("Nicole Forke", "Pasta", "Blue");
   }

  ngOnInit(): void {
  }

}
