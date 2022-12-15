import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsDate
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';


export class AuthsignDto {
  [x: string]: string;
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}


export class AuthDto {
  [x: string]: string;
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  telephone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  photo: string;
}


export class UpdatePasswordDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  new_password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  old_password: string;

}

export class UserDto {
  [x: string]: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  telephone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  photo: string;
}