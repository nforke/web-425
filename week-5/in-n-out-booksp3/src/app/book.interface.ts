/*
================================================================
; Title: Assignment 5.4 - Dialog
; Author: Nicole Forke
; Date: 08 August 2020
; Modified By: Nicole Forke
; Description: Book Interface
================================================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
