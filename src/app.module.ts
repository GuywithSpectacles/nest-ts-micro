import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuppliersModule } from './suppliers/suppliers.module';
import Config from './config/keys';
import * as nano from 'nano';

@Module({
  imports: [SuppliersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: Config.database,
      useFactory: () => {
        const couch = nano({
          url: Config.url,
          requestDefaults: {
            auth: {
              username: Config.username,
              password: Config.password,
            },
          },
        });
        couch.db
          .create('supplier')
          .then((data) => {
            return data;
          })
          .catch((err) => {
            return err;
          });
        return couch.use('supplier');
      },
    },
  ],
})
export class AppModule {}
