// src/articles/dto/create-article.dto.ts
import {IsString, IsOptional} from 'class-validator'

import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsString()
  body: string;

  @ApiProperty({ required: false, default: false })
  @IsOptional()
  published?: boolean = false;
}