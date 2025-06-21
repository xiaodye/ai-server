import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create-user')
  createUser() {
    return this.appService.createUser();
  }

  /**
   * 查询所有用户
   * @returns
   */
  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }
}
