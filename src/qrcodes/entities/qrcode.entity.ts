import { Qrcode } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class QrcodeEntity implements Qrcode {
    @ApiProperty()
    id: number;

    @ApiProperty()
    code: string;
  
    @ApiProperty()
    userId: number;

    @ApiProperty()
    status: boolean;

    @ApiProperty()
    queue: boolean;

    @ApiProperty()
    createdAt: Date;
  
    @ApiProperty()
    updatedAt: Date;    
  }
