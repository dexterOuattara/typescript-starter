import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { AuthService } from './auth.service';
import { AuthDto, AuthsignDto, UpdatePasswordDto, UserList } from './dto';
import { ApiOkResponse } from '@nestjs/swagger';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthsignDto) {
    return this.authService.signin(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('updatePassword')
  updatePassword(@Body() dto: UpdatePasswordDto, id: number) {
    return this.authService.updatePassword(dto, id);
  }
}
