/*
================================================================
; Title: Assignment 6.2 - Output Properties
; Author: Nicole Forke
; Date: 15 August 2020
; Modified By: Nicole Forke
; Description: Wishlist Create Component
================================================================
*/
// import component
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem

  constructor() {
    this.item = {} as IWishlistItem;
   }

  ngOnInit(): void {
  }

  // function to emit items to wishlist component
  addItem(){
    this.addItemEmitter.emit ({
      title: this.item.title,
      authors: this.item.authors
    })
    this.item = {} as IWishlistItem;
  }

}
