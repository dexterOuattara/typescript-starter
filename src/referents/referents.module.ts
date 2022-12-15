import { Module } from '@nestjs/common';
import { ReferentsService } from './referents.service';
import { ReferentsController } from './referents.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ReferentsController],
  providers: [ReferentsService],
  imports: [PrismaModule],
})
export class ReferentsModule {}
