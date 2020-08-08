/*
================================================================
; Title: Assignment 5.3 - Data Types
; Author: Nicole Forke
; Date: 08 August 2020
; Modified By: Nicole Forke
; Description: Contact Component (contact page)
================================================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
