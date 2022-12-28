// src/articles/dto/create-ticket.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTicketDto {
    @ApiProperty()
    @IsNumber()
    userId: number;    

    @ApiProperty()
    @IsString()
    codeTicket: number;   

    @ApiProperty()
    @IsString()
    priority: string;   
}
