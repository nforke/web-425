/*
======================================
; Title: Assignment 2.2
; Author: Nicole Forke
; Date: 16 July 2020
; Modified By: Nicole Forke
; Description: My-App Navigation
======================================
*/

// import module statements
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import routing statements
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
