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
import { User, Article } from '@prisma/client';
import { Request } from 'express';
import { request } from 'http';
import { GetUser } from 'src/auth/decorator/';
import { JwtGuard } from 'src/auth/guard';

import { UserDto } from 'src/auth/dto';
import { AuthGuard} from "@nestjs/passport";
import { AuthService } from 'src/auth/auth.service';
import { AuthDto, AuthsignDto, UpdatePasswordDto, UserList } from '../auth/dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';


// @UseGuards(JwtGuard)
// @UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
@ApiTags('users')

export class UserController {
  constructor(private authService: AuthService) {}
  

  @Get('articles')
  @ApiOkResponse({
    type: UserList,
    isArray: true,
  })  findAllUserPerAricle() {
    return this.authService.findAllUserPerAricle();
  }

  @Get('referents')
  @ApiOkResponse({
    type: UserList,
    isArray: true,
  })  findAllUserPerReferent() {
    return this.authService.findAllUserPerReferent();
  }

  @Get('allusers')
  @ApiOkResponse({
    type: UserList,
    isArray: true,
  })  findAll() {
    return this.authService.findAll();
  }

  @Get('allpatients')
  @ApiOkResponse({
    type: UserList,
    isArray: true,
  })  allpatients() {
    return this.authService.allpatients();
  }

  @Get('allstandardists')
  @ApiOkResponse({
    type: UserList,
    isArray: true,
  })  allstandardists() {
    return this.authService.allstandardists();
  }

  @Get('alladmins')
  @ApiOkResponse({
    type: UserList,
    isArray: true,
  })  alladmins() {
    return this.authService.alladmins();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserList })
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
