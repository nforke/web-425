/*
================================================================
; Title: Assignment 5.2 - Navigation and Layout
; Author: Nicole Forke
; Date: 08 August 2020
; Modified By: Nicole Forke
; Description: Book Interface Object
================================================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
