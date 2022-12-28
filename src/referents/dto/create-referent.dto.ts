// src/articles/dto/create-service.dto.ts
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsEnum,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/auth/enum/role-type.enum';

export class CreateReferentDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  telephone: string;

  @ApiProperty()
  @IsNumber()
  userId: number;

}
