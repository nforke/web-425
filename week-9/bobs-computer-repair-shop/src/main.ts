/*
================================================================
; Title: Bob's Computer Repair
; Author: Nicole Forke
; Date: 30 August 2020
; Modified By: Nicole Forke
; Description: Main Component
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
