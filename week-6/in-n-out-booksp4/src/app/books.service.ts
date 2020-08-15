/*
================================================================
; Title: Assignment 6.2 - Output Properties
; Author: Nicole Forke
; Date: 15 August 2020
; Modified By: Nicole Forke
; Description: Book Service
================================================================
*/
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>

  constructor() {
    this.books = [
      {
        isbn: "0123456789",
        title: "Daddys Girls",
        description: "Book 1 - A father starts over in California with his three small girls after mother passes away.",
        numOfPages: 288,
        authors: ['Danielle Steel']
      },
      {
        isbn: "234567891",
        title: "Royal",
        description: "Book 2 - As war rages on in the summer of 1943, the King and Queen quietly send their youngest daughter to live with a trusted noble family.",
        numOfPages: 288,
        authors: ["Danielle Steel"]
      },
      {
        isbn: "345678912",
        title: "The Cast",
        description: "Book 3 - An adored magazine columnist, respected by fans across the country prefers to avoid the complications of life.",
        numOfPages: 352,
        authors: ["Danielle Steel"]
      },
      {
        isbn: "456789123",
        title: "The Dark Side",
        description: "Book 4 - A young womans childhood was marked by her younger sisters tragic illness, watching as he parents dedicated themselves to her final days then divorced.",
        numOfPages: 288,
        authors: ["Danielle Steel"]
      },
      {
        isbn: "567891234",
        title: "Against All Odds",
        description: "Book 5 - Taking chances is part of life, but when you bet your future against the odds, it's a high-risk game.",
        numOfPages: 352,
        authors: ["Danielle Steel"]
      }
    ]
   }
   getBooks(): Observable<IBook[]>{
     return of(this.books);
   }
   getBook(isbn: string): IBook {
     for (let book of this.books) {
       if (book.isbn === isbn) {
         return book;
       }
     }
   }
}
