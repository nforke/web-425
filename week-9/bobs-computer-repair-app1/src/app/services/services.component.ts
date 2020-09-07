/*
================================================================
; Title: Bob's Computer Repair
; Author: Nicole Forke
; Date: 30 August 2020
; Modified By: Nicole Forke
; Description: Services Component
================================================================
*/
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  // arrays
  selectedItems = [];
  checkedID = [];
  checkedValue = [];

  showSelectedWarning: boolean;
  showAddedCostWarning: boolean;

  // variables
  total: number;
  parts = 0;
  labor = 0;

  constructor(private dialog: MatDialog) {}
    // open invoice dialog
    openDialog() {
      const dialogRef = this.dialog.open(InvoiceDialogComponent, {
        width: '25%',
        data: {selectedItems: this.selectedItems, parts: this.parts, labor: this.labor, total: this.total}
      });
    }

    // array
   checkboxData = [
     {
       name: "Password Reset",
       value: 39.99,
       id: 'passwordReset',
       label: 'Password Reset - $39.99',
       isChecked: false
     },
     {
       name: "Spyware Removal",
       value: 99.99,
       id: 'spywareRemoval',
       label: 'Spyware Removal - $99.99',
       isChecked: false
     },
     {
       name: "RAM Upgrade",
       value: 129.99,
       id: 'ramUpgrade',
       label: 'RAM Upgrade - $129.99',
       isChecked: false
     },
     {
       name: "Software Installation",
       value: 49.99,
       id: 'softwareInstallation',
       label: 'Software Installation - $49.99',
       isChecked: false
     },
     {
       name: "Tune-Up",
       value: 89.99,
       id: 'tuneUp',
       label: 'Tune-Up - $89.99',
       isChecked: false
     },
     {
       name: "Keyboard Cleaning",
       value: 45.00,
       id: 'keyboardCleaning',
       label: 'Keyboard Cleaning - $45.00',
       isChecked: false
     },
     {
       name: "Disk Clean-Up",
       value: 149.99,
       id: 'diskCleanUp',
       label: 'Disk Clean-Up - $149.99',
       isChecked: false
     }
   ]

  ngOnInit(): void {
    this.total = 0;
    this.fetchSelectedItems()
    this.fetchCheckedID()
  }

  fetchSelectedItems() {
    this.selectedItems = this.checkboxData.filter((value, index) => {
      return value.isChecked
    });
  }

  // push array data to get total
  fetchCheckedID() {
    this.checkedID = []
    this.checkboxData.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedID.push(value.id);
        this.total += value.value;
      }
    });
  }

  changeSelection() {
    this.total = 0;
    this.fetchSelectedItems()
    this.fetchCheckedID
  }

}
