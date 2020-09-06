/*
================================================================
; Title: Assignment 8.2 - Server-Side Communications
; Author: Nicole Forke
; Date: 26 August 2020
; Modified By: Nicole Forke
; Description: Book Service
================================================================
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ];

  constructor(private http: HttpClient) {
   }

   getBooks() {
     // new variable for params
     let params = new HttpParams();

    // params.append function to add entries
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    return this.http.get('https://openlibrary.org/api/books', {params: params})
   }
}
