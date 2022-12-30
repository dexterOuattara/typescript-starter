// src/articles/dto/create-qrcode.dto.ts
import {
  IsBoolean,
  IsNumber,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateQrcodeDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  @IsBoolean()
  queue?: boolean;

  @ApiProperty()
  @IsNumber()
  userId: number;
}
