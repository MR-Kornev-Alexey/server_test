import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    console.log('Это действие добавляет новую запись кота');
    return 'Это действие добавляет новую запись кота';
  }

  @Get()
  findAll(): string {
    console.log('Это действие добавляет новую запись кота ыыыы');
    return 'Это действие возвращает записи всех котов как то';
  }
}
@Controller('reg')
export class RegController {
  @Post()
  create(@Body() data: any): string {
    // Обработка полученных данных
    console.log(data);
    return 'Data received successfully';
  }}
