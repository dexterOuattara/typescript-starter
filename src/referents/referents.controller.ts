import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters,ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ReferentsService } from './referents.service';
import { CreateReferentDto } from './dto/create-referent.dto';
import { UpdateReferentDto } from './dto/update-referent.dto';

import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ReferentEntity } from './entities/referent.entity';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception.filter';


@Controller('referents')
@ApiTags('referents')
@UseFilters(PrismaClientExceptionFilter)  

export class ReferentsController {
  constructor(private readonly referentsService: ReferentsService) {}

  @Post()
  @ApiCreatedResponse({ type: ReferentEntity })
  async create(
    @Body() createReferentDto: CreateReferentDto,
  ) {
    return this.referentsService.create(
      createReferentDto,
    );
  }

  @Get()
  @ApiOkResponse({
    type: ReferentEntity,
    isArray: true,
  })  findAll() {
    return this.referentsService.findAll();
  }


  @Get(':id')
  @ApiOkResponse({ type: ReferentEntity })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const referent =
      await this.referentsService.findOne(+id);

    if (!referent) {
      throw new NotFoundException(
        `Could not find referent with ${id}.`,
      );
    }
    return referent;
  }


  @Patch(':id')
  @ApiOkResponse({ type: ReferentEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateReferentDto: UpdateReferentDto,
  ) {
    return this.referentsService.update(
      +id,
      UpdateReferentDto,
    );
  }


  @Delete(':id')
  @ApiOkResponse({ type: ReferentEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.referentsService.remove(+id);
  }
}
