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
import { AuthService } from './auth.service';
import { AuthDto, AuthsignDto, UpdatePasswordDto, UserList } from './dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
