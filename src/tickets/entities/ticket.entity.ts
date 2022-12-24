import { Ticket } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TicketEntity implements Ticket {

    @ApiProperty()
    id: number;

    @ApiProperty()
    userId: number;
  
    @ApiProperty()
    serviceId: number;
    
    @ApiProperty()
    priority: string;  

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
