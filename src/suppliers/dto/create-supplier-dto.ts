import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class supplierAddress {
  readonly addressLine1: string;
  readonly addressLine2: string;
  readonly city: string;
  readonly country: string;
  readonly zipCode: number;
}

export class CreateSupplierDTO {
  @Type(() => supplierAddress)
  @ValidateNested()
  readonly supplierID: string;
  readonly supplierName: string;
  readonly supplierAddress: supplierAddress;
  readonly supplierPhone: number;
  readonly supplierEmailAddress: string;
  readonly supplierCurrency: string;
  readonly supplierContactPerson: string;
  readonly supplierType: string;
  readonly supplierTaxRegistrationNumber: number;
  readonly supplierBusinessRegistrationNumber: number;
}
