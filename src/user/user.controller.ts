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
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { request } from 'http';
import { GetUser } from 'src/auth/decorator/';
import { JwtGuard } from 'src/auth/guard';

import { UserDto } from 'src/auth/dto';
import { AuthGuard} from "@nestjs/passport";
import { ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';


// @UseGuards(JwtGuard)
// @UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController {
  authService: any;
  

  @Get('users')
  @ApiOkResponse({
    type: AuthService,
    isArray: true,
  })  findAll() {
    return this.authService.findAll();
  }

  @Get('you')
  getYou(
    @GetUser() user: User){
    return 'fdshjdfvhj fdsuhy';
  }
}
