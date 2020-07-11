/*
================================
; Title: Assignment 1.4
; Author: Nicole Forke
; Date: 11 July 2020
; Modified By: Nicole Forke
; Description: TypeScript
================================
*/

// import over interface
import { IPerson } from "./person.interface";

// implement the IPerson interface
class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// create new person object
let myName = new Person("Nicole", "Forke");

// output the Person objects first and last name values
console.log(`My name is ${myName.firstName} ${myName.lastName}`);