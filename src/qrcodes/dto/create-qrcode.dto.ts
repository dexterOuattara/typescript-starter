// src/articles/dto/create-qrcode.dto.ts

import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateQrcodeDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsNumber()
  userId: number;

  @ApiProperty({
    required: false,
    default: false,
  })
  @IsOptional()
  status?: boolean = false;

  @ApiProperty({
    required: false,
    default: false,
  })
  @IsOptional()
  queue?: boolean = false;
}
