import {
  Controller,
  Get,
  UseGuards,
  Body,
  // ClassSerializerInterceptor,
  Param,
  ParseIntPipe,
  Put,
  Query,
  // UseInterceptors
} from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { request } from 'http';
import { GetUser } from 'src/auth/decorator/';
import { JwtGuard } from 'src/auth/guard';

import { UserDto } from 'src/auth/dto';
import { AuthGuard} from "@nestjs/passport";


// @UseGuards(JwtGuard)
// @UseInterceptors(ClassSerializerInterceptor)
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
