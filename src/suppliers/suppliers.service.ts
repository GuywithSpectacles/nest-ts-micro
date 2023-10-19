import { Injectable } from '@nestjs/common';
import { Supplier } from './interfaces/supplier.interface';

@Injectable()
export class SuppliersService {
  private readonly suppliers: Supplier[] = [
    {
      id: '1',
      name: 'East Blue',
      address: {
        addressLine1: 'csdq',
        addressLine2: 'vfvsv',
        city: 'sadsadsadwqewqdsacsa',
        country: 'sadsadsadwqewqdsacsa',
        zipCode: 242,
      },
      phone: 165651651651,
      email: 'sakjdsjkandkjsnajkd',
      currency: 'sadsadsadwqewqdsacsa',
      contactPerson: 'sadsadsadwqewqdsacsa',
      type: 'sadsadsadwqewqdsacsa',
      taxRegistrationNumber: 441545415,
      businessRegistrationNumber: 6516516161,
    },
    {
      id: '2',
      name: 'West Blue',
      phone: 165651651651,
      email: 'sakjdsjkandkjsnajkd',
      type: 'sadsadsadwqewqdsacsa',
      taxRegistrationNumber: 441545415,
      businessRegistrationNumber: 6516516161,
    },
  ];

  findAll(): Supplier[] {
    return this.suppliers;
  }

  findOne(id: string): Supplier {
    return this.suppliers.find((supplier) => supplier.id === id);
  }
}
