// src/articles/dto/create-ticket.dto.ts
import { UserRole } from '../enum/priority-type.enum';

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTicketDto {
    @ApiProperty()
    @IsNumber()
    userId: number;
  
    @ApiProperty()
    @IsNumber()
    serviceId: number;      

    @ApiProperty()
    @IsString()
    priority: string;   
}
