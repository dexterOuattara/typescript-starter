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
  photo: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}