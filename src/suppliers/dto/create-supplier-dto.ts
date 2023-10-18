import { ValidateNested, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';

class address {
  readonly addressLine1: string;
  readonly addressLine2: string;
  readonly city: string;
  readonly country: string;
  readonly zipCode: number;
}

export class CreateSupplierDTO {
  @Type(() => address)
  @ValidateNested()
  readonly name: string;
  readonly address: address;
  readonly phone: number;
  @IsEmail()
  readonly email: string;
  readonly currency: string;
  readonly contactPerson: string;
  readonly type: string;
  readonly taxRegistrationNumber: number;
  readonly businessRegistrationNumber: number;
}
