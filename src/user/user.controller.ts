import {
  Controller,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { request } from 'http';
import { GetUser } from 'src/auth/decorator/';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(
    @GetUser() user: User){
    return user;
  }

  @Get('you')
  getYou(
    @GetUser() user: User){
    return 'fdshjdfvhj fdsuhy';
  }
}
