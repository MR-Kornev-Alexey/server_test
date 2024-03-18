import { Module } from '@nestjs/common';
import {AppController, CatsController, RegController} from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, RegController],
  providers: [AppService],
})
export class AppModule {}
