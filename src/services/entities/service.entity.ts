// src/articles/entities/service.entity.ts

import { Service } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ServiceEntity implements Service {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}