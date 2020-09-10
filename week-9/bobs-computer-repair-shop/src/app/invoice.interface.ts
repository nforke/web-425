/*
================================================================
; Title: Bob's Computer Repair
; Author: Nicole Forke
; Date: 5 September 2020
; Modified By: Nicole Forke
; Description: Invoice Interface
================================================================
*/

import { IRepairService } from './repair-service.interface';

export interface Invoice {
  lineItems: Array<IRepairService>;
  partsAmount: number;
  laborAmount: number;
  orderDate: string;
}
