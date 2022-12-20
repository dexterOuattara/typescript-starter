// src/articles/dto/create-qrcode.dto.ts

import { IsNumber, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateQrcodeDto {
    @ApiProperty()
    @IsString()
    code: string;
  
    @ApiProperty()
    @IsNumber()
    userId: number;    
}
