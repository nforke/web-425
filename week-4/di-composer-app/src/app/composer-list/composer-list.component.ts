/*
=======================================================================
; Title: Assignment 4.2 - Inversion of Control and Dependency Injection
; Author: Nicole Forke
; Date: 28 July 2020
; Modified By: Nicole Forke
; Description: Composer-List Component
========================================================
*/
// import component
import { Component, OnInit } from '@angular/core';
//import over IComposer interface and class
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

// export component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // define local component variable
  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    // call composer service new instance of composer service using DI
    this.composers = this.composerService.getComposers();
   }

  ngOnInit(): void {
  }

}
