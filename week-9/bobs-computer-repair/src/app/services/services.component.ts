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
import { IRepairService } from '../repair-service.interface';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  // variable to hold array
  services: Array<IRepairService>;
  selectedItems: Array<IRepairService>;
  serviceForm: FormGroup;

  parts: number;
  labor: number;
  total: number;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
   // array
   this.services = [
    {
      id: 100,
      title: "Password Reset",
      price: 39.99,
      label: "Password Reset - $39.99"
    },
    {
      id: 101,
      title: "Spyware Removal",
      price: 99.99,
      label: "Spyware Removal - $99.99"
    },
    {
      id: 102,
      title: "RAM Upgrade",
      price: 129.99,
      label: "RAM Upgrade - $129.99"
    },
    {
      id: 103,
      title: "Software Installation",
      price: 49.99,
      label: "Software Installation - $49.99"
    },
    {
      id: 103,
      title: "Tune-Up",
      price: 89.99,
      label: "Tune-Up - $89.99"
    },
    {
      id: 104,
      title: "Keyboard Cleaning",
      price: 45.00,
      label: "Keyboard Cleaning - $45.00"
    },
    {
      id: 105,
      title: "Disk Clean-Up",
      price: 149.99,
      label: "Disk Clean-Up - $149.99"
    }
  ]
  }

  // returns form array
  get serviceFormArray(): FormArray {
    return this.serviceForm.controls.serviceOptions as FormArray;
  }
  // dynamically adds for controls to the form array.
  private addServiceCheckboxes(): void {
    this.services.forEach(() => this.serviceFormArray.push(new FormControl(false)));
  }

  ngOnInit(): void {
    // create reactive form
    this.serviceForm = this.fb.group({
      serviceOptions: new FormArray([]),
      parts: ['null', Validators.compose([Validators.required])],
      labor: ['null', Validators.compose([Validators.required])]
    });

    // add checkboxes
    this.addServiceCheckboxes();
  }

  onSubmit() {
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      width: '25%',
      data: {selectedItems: this.selectedItems, parts: this.parts, labor: this.labor, total: this.total}
    })
    // loop over the form and build array of selected services
    this.selectedItems = this.serviceForm.value.serviceOptions
    .map((checked, index) => checked ? this.services[index] : null)
    .filter(v => v !== null);

    console.log(this.selectedItems);
    }
  }
