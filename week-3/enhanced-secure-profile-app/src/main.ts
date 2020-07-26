/*
================================================
; Title: Assignment 3.3
; Author: Nicole Forke
; Date: 25 July 2020
; Modified By: Nicole Forke
; Description: main ts file
================================================
*/
// import statements
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
