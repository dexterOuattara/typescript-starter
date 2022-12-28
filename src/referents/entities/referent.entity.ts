// src/referents/entities/referent.entity.ts

import {
  Referent,
  // UserRole,
} from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ReferentEntity implements Referent {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  telephone: string;

  @ApiProperty()
  userId: number;
}
