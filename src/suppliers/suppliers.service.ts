import { Injectable } from '@nestjs/common';
import { CreateSupplierDTO } from './dto/create-supplier-dto';
import Config from '../config/keys';
import * as nano from 'nano';

@Injectable()
export class SuppliersService {
  private db;

  constructor() {
    const couch = nano(Config.url); //Couchdb url
    this.db = couch.use('supplier'); // Database name
  }

  async createSupplier(createSupplier: CreateSupplierDTO) {
    try {
      const supplier = await this.db.insert(createSupplier);
      return supplier;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getSuppliers() {
    try {
      const suppliers = await this.db.list({ include_docs: true });
      return suppliers;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getSupplier(id: string) {
    try {
      const supplier = await this.db.get(id);
      return supplier;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteSupplier(id: string) {
    try {
      await this.db.delete(id);
      return `The supplier has been deleted`;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateSupplier(id: string, updateSupplier) {
    try {
      let supplier = await this.db.get(id);
      if (supplier) {
        supplier = await this.db.insert({
          _id: supplier._id,
          _rev: supplier._rev,
          name: updateSupplier.name ? updateSupplier.name : supplier.name,
          address: {
            addressLine1: updateSupplier.addressLine1
              ? updateSupplier.address.addressLine1
              : supplier.addressLine1,
            addressLine2: updateSupplier.addressLine2
              ? updateSupplier.address.addressLine2
              : supplier.addressLine2,
            city: updateSupplier.city
              ? updateSupplier.address.city
              : supplier.city,
            country: updateSupplier.country
              ? updateSupplier.address.country
              : supplier.country,
            zipCode: updateSupplier.zipCodeaddress
              ? updateSupplier.address.zipCode
              : supplier.zipCode,
          },
          phone: updateSupplier.phone ? updateSupplier.phone : supplier.phone,
          email: updateSupplier.email ? updateSupplier.email : supplier.email,
          currency: updateSupplier.currency
            ? updateSupplier.currency
            : supplier.currency,
          contactPerson: updateSupplier.contactPerson
            ? updateSupplier.contactPerson
            : supplier.contactPerson,
          type: updateSupplier.type ? updateSupplier.type : supplier.type,
          taxRegistrationNumber: updateSupplier.taxRegistrationNumber
            ? updateSupplier.taxRegistrationNumber
            : supplier.taxRegistrationNumber,
          businessRegistrationNumber: updateSupplier.businessRegistrationNumber
            ? updateSupplier.businessRegistrationNumber
            : supplier.businessRegistrationNumber,
        });

        return supplier;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
