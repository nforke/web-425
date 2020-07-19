/*
================================================
; Title: Assignment 2.3
; Author: Nicole Forke
; Date: 18 July 2020
; Modified By: Nicole Forke
; Description: Composer Component
================================================
*/
// import component
import { Component, OnInit } from '@angular/core';

// composer class with two fields
export default class Composer {
  fullName: string;
  genre: string;

// constructor to accept two parameters
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

// export component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // define variable
  composer: Array<Composer>;

  constructor() {
    this.composer = [
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer ("Wolfgang Amadeus Mozart", "Classical"),
      new Composer ("Frederic Chopin", "Classical"),
      new Composer ("Claude Debussy", "Classical"),
      new Composer ("George Frideric Handel", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}
