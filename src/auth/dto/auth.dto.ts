import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsDateString,
  IsEnum
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../enum/role-type.enum';
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

  // @ApiProperty()
  // @IsEnum(UserRole)
  // @IsNotEmpty()
  // readonly role: UserRole;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  photo: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  birthday: Date;
  UserRole: any;
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

  // @ApiProperty()
  // @IsEnum(UserRole)
  // @IsNotEmpty()
  // readonly role: UserRole;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  photo: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  birthday: Date;
}

