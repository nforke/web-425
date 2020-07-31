/*
=======================================================================
; Title: Assignment 4.2 - Inversion of Control and Dependency Injection
; Author: Nicole Forke
; Date: 28 July 2020
; Modified By: Nicole Forke
; Description: Composer Service
========================================================
*/
// import statements for service
import { Injectable } from '@angular/core';
// import IComposer interface
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})

export class ComposerService {

  composers: Array < IComposer >;


  // constructor to accept two parameters
    constructor() {
      this.composers = [
        {
          composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
        },
        {
          composerId: 200, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
        },
        {
          composerId: 300, fullName: "Frederic Chopin", genre: "Classical"
        },
        {
          composerId: 400, fullName: "Claude Debussy", genre: "Classical"
        },
        {
          composerId: 500, fullName: "George Frideric Handel", genre: "Classical"
        }
      ]
    }

    // functions to act as data access points for composer objects
    getComposers() {
      return this.composers;
    }
  // loop over composer array
    getComposer(composerId: number) {
      for (let composer of this.composers) {
        if (composer.composerId === composerId) {
          return composer;
        }
      }
    }
}
