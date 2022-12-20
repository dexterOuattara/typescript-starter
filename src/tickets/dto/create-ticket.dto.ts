// src/articles/dto/create-ticket.dto.ts
import { UserRole } from '../enum/priority-type.enum';

import { ApiProperty } from '@nestjs/swagger';
import { Priority } from '@prisma/client';
import { IsEnum, IsNumber } from 'class-validator';

export class CreateTicketDto {
    @ApiProperty()
    @IsNumber()
    userId: number;
  
    @ApiProperty()
    @IsNumber()
    serviceId: number;      

    @ApiProperty()
    @IsEnum(Priority)
    readonly role: Priority; 
}
