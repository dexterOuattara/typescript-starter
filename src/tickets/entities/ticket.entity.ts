import { Ticket } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TicketEntity implements Ticket {

    @ApiProperty()
    id: number;

    @ApiProperty()
    codeTicket: number;  

    @ApiProperty()
    priority: string;  

    @ApiProperty()
    userId: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
