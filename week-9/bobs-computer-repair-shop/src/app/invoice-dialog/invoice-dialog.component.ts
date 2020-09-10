/*
================================================================
; Title: Bob's Computer Repair
; Author: Nicole Forke
; Date: 30 August 2020
; Modified By: Nicole Forke
; Description: Invoice-Dialog Component
================================================================
*/
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss']
})
export class InvoiceDialogComponent implements OnInit {
  @Input() selectedItems;
  @Input() total: number;
  @Input() parts: number;
  @Input() labor: number;

  today: number = Date.now();

  constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.labor = data.labor,
    this.parts = data.parts,
    this.total = data.total,
    this.selectedItems = data.selectedItems;
   }

  ngOnInit(): void {
  }
}
