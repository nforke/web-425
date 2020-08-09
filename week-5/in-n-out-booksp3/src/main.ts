/*
================================================================
; Title: Assignment 5.4 - Dialog
; Author: Nicole Forke
; Date: 08 August 2020
; Modified By: Nicole Forke
; Description: Main
================================================================
*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
