/*
==========================================================
; Title: Assignment 4.3 - Handling Events with Observables
; Author: Nicole Forke
; Date: 29 July 2020
; Modified By: Nicole Forke
; Description: Composer-List Component
==========================================================
*/
// import component
import { Component, OnInit } from '@angular/core';
// import over IComposer interface and class
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
// import statement for FormControl
import { FormControl } from '@angular/forms';
// import statement for rxjs
import { debounceTime } from 'rxjs/operators';

// export component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // define local component variable
  composers: Array<IComposer>;
  // new field for from control
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    // call composer service new instance of composer service using DI
    this.composers = this.composerService.getComposers();

    // subscribe method
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
   }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    alert(name);
  }

}
