/*
================================================================
; Title: Assignment 4.3 - Handling Form Events with Observables
; Author: Nicole Forke
; Date: 30 July 2020
; Modified By: Nicole Forke
; Description: Composer-List Component
================================================================
*/
// import component
import { Component, OnInit } from '@angular/core';
//import over IComposer interface and class
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

// export component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // array to hold composer list
  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    // call composer service new instance of composer service using DI
    this.composers = this.composerService.getComposers();

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
   }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }

}
