import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,

  UseGuards,
  // ClassSerializerInterceptor,
  Param,
  ParseIntPipe,
  Post,
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
import { AuthService } from 'src/auth/auth.service';
import { AuthDto, AuthsignDto, UpdatePasswordDto, UserList } from '../auth/dto';
import { ApiOkResponse } from '@nestjs/swagger';


// @UseGuards(JwtGuard)
// @UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController {
  constructor(private authService: AuthService) {}
  

  @Get('allusers')
  @ApiOkResponse({
    type: AuthDto,
    isArray: true,
  })  findAll() {
    return this.authService.findAll();
  }

  @Get('allpatients')
  @ApiOkResponse({
    type: AuthDto,
    isArray: true,
  })  allpatients() {
    return this.authService.allpatients();
  }

  @Get('allstandardists')
  @ApiOkResponse({
    type: AuthDto,
    isArray: true,
  })  allstandardists() {
    return this.authService.allstandardists();
  }

  @Get('alladmins')
  @ApiOkResponse({
    type: AuthDto,
    isArray: true,
  })  alladmins() {
    return this.authService.alladmins();
  }

  @Get(':id')
  @ApiOkResponse({ type: AuthDto })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const qrcode =
    await this.authService.findOne(+id);
    if (!qrcode) {
      throw new NotFoundException(
        `Could not find user with ${id}.`,
      );
    }
    return qrcode;
  }

  @Get('you')
  getYou(
    @GetUser() user: User){
    return 'fdshjdfvhj fdsuhy';
  }

  
}
