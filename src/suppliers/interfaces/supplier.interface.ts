class address {
  readonly addressLine1: string;
  readonly addressLine2: string;
  readonly city: string;
  readonly country: string;
  readonly zipCode: number;
}

export interface Supplier {
  name: string;
  address?: address;
  phone: number;
  email: string;
  currency?: string;
  contactPerson?: string;
  type: string;
  taxRegistrationNumber: number;
  businessRegistrationNumber: number;
}
