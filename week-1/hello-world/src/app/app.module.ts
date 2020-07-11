/*
======================================
; Title: Assignment 1.3
; Author: Nicole Forke
; Date: 10 July 2020
; Modified By: Nicole Forke
; Description: Hello-World Application
======================================
*/

// import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// root module export and variables
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
