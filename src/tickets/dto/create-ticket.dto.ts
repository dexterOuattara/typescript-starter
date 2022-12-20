// src/articles/dto/create-ticket.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateTicketDto {
    @ApiProperty()
    @IsNumber()
    userId: number;
  
    @ApiProperty()
    @IsNumber()
    serviceId: number;      
}
