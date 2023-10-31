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
import { SuppliersService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  async createSupplier(@Body() createSupplierData: CreateSupplierDTO) {
    return await this.suppliersService.createSupplier(createSupplierData);
  }

  @Get()
  getSuppliers() {
    return this.suppliersService.getSuppliers();
  }

  @Get(':id')
  async getSupplier(@Param('id') id: string) {
    return await this.suppliersService.getSupplier(id);
  }

  @Put(':id')
  async updateSupplier(
    @Body() updateSupplierData: CreateSupplierDTO,
    @Param('id') id: string,
  ) {
    return await this.suppliersService.updateSupplier(id, updateSupplierData);
  }

  @Delete()
  async deleteSupplier(@Param('id') id: string) {
    return await this.suppliersService.deleteSupplier(id);
  }
}
