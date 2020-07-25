/*
========================================================
; Title: Assignment 3.2 - Passing Data to Routes, Part 1
; Author: Nicole Forke
; Date: 24 July 2020
; Modified By: Nicole Forke
; Description: Composer-List Component
========================================================
*/
// import component
import { Component, OnInit } from '@angular/core';
//import over IComposer interface and class
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

// export component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // define local component variable
  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
   }

  ngOnInit(): void {
  }

}
