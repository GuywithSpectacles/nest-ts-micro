import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateSupplierDTO } from './dto/create-supplier-dto';

@Controller('suppliers')
export class SuppliersController {
  @Get()
  findAll(): string {
    return 'Get Supplier Data';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Supplier ${id}`;
  }

  @Post()
  create(@Body() createSupplierDTO: CreateSupplierDTO): string {
    return `
    Name: ${createSupplierDTO.name}
    Address: ${createSupplierDTO.address.addressLine1} ${createSupplierDTO.address.addressLine2}
    City: ${createSupplierDTO.address.city}
    Country: ${createSupplierDTO.address.country}
    Zipcode: ${createSupplierDTO.address.zipCode}
    Phone: ${createSupplierDTO.phone}
    Email: ${createSupplierDTO.email}
    Currency: ${createSupplierDTO.currency}
    ContactPerson: ${createSupplierDTO.contactPerson}
    type: ${createSupplierDTO.type}
    TaxRegistrationNumber: ${createSupplierDTO.taxRegistrationNumber}
    BusinessRegistrationNumber: ${createSupplierDTO.businessRegistrationNumber} 
    `;
  }

  @Delete(`:id`)
  delete(@Param('id') id): string {
    return `Supplier ${id} has successfully been deleted`;
  }

  @Put(`:id`)
  update(
    @Body() updateSupplierDTO: CreateSupplierDTO,
    @Param('id') id,
  ): string {
    return `
    Update ${id} -
    Name: ${updateSupplierDTO.name}
    Address: ${updateSupplierDTO.address.addressLine1} ${updateSupplierDTO.address.addressLine2}
    City: ${updateSupplierDTO.address.city}
    Country: ${updateSupplierDTO.address.country}
    Zipcode: ${updateSupplierDTO.address.zipCode}
    Phone: ${updateSupplierDTO.phone}
    Email: ${updateSupplierDTO.email}
    Currency: ${updateSupplierDTO.currency}
    ContactPerson: ${updateSupplierDTO.contactPerson}
    type: ${updateSupplierDTO.type}
    TaxRegistrationNumber: ${updateSupplierDTO.taxRegistrationNumber}
    BusinessRegistrationNumber: ${updateSupplierDTO.businessRegistrationNumber} 
    `;
  }
}
