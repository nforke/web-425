/*
<<<<<<< HEAD
==========================================================
; Title: Assignment 4.3 - Handling Events with Observables
; Author: Nicole Forke
; Date: 29 July 2020
; Modified By: Nicole Forke
; Description: Main Module
==========================================================
=======
================================================================
; Title: Assignment 4.3 - Handling Form Events with Observables
; Author: Nicole Forke
; Date: 30 July 2020
; Modified By: Nicole Forke
; Description: Main Module
================================================================
>>>>>>> ddb51ec9ce3400f2920c3fc53809566d4126d08c
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
