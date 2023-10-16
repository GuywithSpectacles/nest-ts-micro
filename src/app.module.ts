import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuppliersController } from './suppliers/suppliers.controller';

@Module({
  imports: [],
  controllers: [AppController, SuppliersController],
  providers: [AppService],
})
export class AppModule {}
