import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';


import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TicketEntity } from './entities/ticket.entity';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception.filter';


@Controller('tickets')
@ApiTags('tickets')
@UseFilters(PrismaClientExceptionFilter)
export class TicketsController {
  constructor(
    private readonly ticketsService: TicketsService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: TicketEntity })
  async create(
    @Body() createTicketDto: CreateTicketDto,
  ) {
    return this.ticketsService.create(
      createTicketDto,
    );
  }

  @Get()
  @ApiOkResponse({
    type: TicketEntity,
    isArray: true,
  }) 
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TicketEntity })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const ticket =
    await this.ticketsService.findOne(+id);
    if (!ticket) {
      throw new NotFoundException(
        `Could not find referent with ${id}.`,
      );
    }
    return ticket;
  }

  @Patch(':id')
  @ApiOkResponse({ type: TicketEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateTicketDto: UpdateTicketDto,
  ) {
    return this.ticketsService.update(
      +id,
      UpdateTicketDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: TicketEntity })
  remove(@Param('id') id: number) {
    return this.ticketsService.remove(+id);
  }
}
