import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('we-good')
  getHello() {
    return 'We good.';
  }
}
