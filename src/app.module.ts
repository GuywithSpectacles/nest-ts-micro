import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuppliersController } from './suppliers/suppliers.controller';
import { SuppliersService } from './suppliers/suppliers.service';

@Module({
  imports: [],
  controllers: [AppController, SuppliersController],
  providers: [AppService, SuppliersService],
})
export class AppModule {}
