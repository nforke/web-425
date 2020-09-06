/*
================================================================
; Title: Bob's Computer Repair
; Author: Nicole Forke
; Date: 15 August 2020
; Modified By: Nicole Forke
; Description: Services Component
================================================================
*/
import { Component, OnInit, Inject } from '@angular/core';
import { IRepairService } from '../repair-service.interface';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  total: number;
  parts = 0;
  labor = 0;

  service: Array<IRepairService> = [
    {id: 101, title: "Password Reset", price: 39.99},
    {id: 102, title: "Spyware Removal", price: 99.99},
    {id: 103, title: "RAM Upgrade", price: 129.99},
    {id: 104, title: "Software Installation", price: 49.99},
    {id: 105, title: "Tune-up", price: 89.99},
    {id: 106, title: "Keyboard Cleaning", price: 45.00},
    {id: 107, title: "Disk Clean-up", price: 149.99}
  ];
  serviceRepairForm;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialog) {

    this.serviceRepairForm = this.formBuilder.group({
      serviceRepairOptions: new FormArray([]),
      parts: [null, Validators.compose([Validators.required])],
      labor: [null, Validators.compose([Validators.required])]
    });
   }

  ngOnInit(): void {
    this.service = this.serviceRepairForm.getService();
  }

  onSubmit() {
    this.serviceRepairForm = this.serviceRepairForm.value.serviceRepairOptions
    .map((checked, index) => checked ? this.service[index] : null)
    .filter(v => v !== null); //filter out the null values;
    this.serviceRepairForm.reset();
  }

}
