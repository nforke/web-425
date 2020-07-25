/*
========================================================
; Title: Assignment 3.2 - Passing Data to Routes, Part 1
; Author: Nicole Forke
; Date: 24 July 2020
; Modified By: Nicole Forke
; Description: Composer Class
========================================================
*/

// import statement for interface
import { IComposer} from './composer.interface';

// composer class with two fields
export class Composer {
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
