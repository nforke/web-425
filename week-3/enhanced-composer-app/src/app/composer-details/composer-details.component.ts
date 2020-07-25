/*
========================================================
; Title: Assignment 3.2 - Passing Data to Routes, Part 1
; Author: Nicole Forke
; Date: 24 July 2020
; Modified By: Nicole Forke
; Description: Composer-Details Component
========================================================
*/
// import statement
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';


@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
