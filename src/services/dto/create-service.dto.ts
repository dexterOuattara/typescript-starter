// src/articles/dto/create-service.dto.ts
import {IsString, IsOptional} from 'class-validator'

import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  
    @ApiProperty()
    @IsString()
    title: string;
  
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description?: string;
  
    @ApiProperty({ required: false, default: false })
    @IsOptional()
    published?: boolean = false;
}
