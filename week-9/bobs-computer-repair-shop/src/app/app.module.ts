/*
================================================================
; Title: Bob's Computer Repair
; Author: Nicole Forke
; Date: 30 August 2020
; Modified By: Nicole Forke
; Description: App Module
================================================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { ServicesComponent } from './services/services.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { InvoiceDialogComponent } from './invoice-dialog/invoice-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    InvoiceDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
