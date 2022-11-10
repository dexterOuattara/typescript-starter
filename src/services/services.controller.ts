import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ValidationPipe,
  UseFilters,
  ParseIntPipe,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ServiceEntity } from './entities/service.entity';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception.filter';

@Controller('services')
@ApiTags('services')
@UseFilters(PrismaClientExceptionFilter)  

export class ServicesController {
  constructor(
    private readonly servicesService: ServicesService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: ServiceEntity })
  async create(
    @Body() createServiceDto: CreateServiceDto,
  ) {
    return this.servicesService.create(
      createServiceDto,
    );
  }

  @Get('drafts')
  @ApiOkResponse({
    type: ServiceEntity,
    isArray: true,
  })
  findDrafts() {
    return this.servicesService.findDrafts();
  }

  @Get()
  @ApiOkResponse({
    type: ServiceEntity,
    isArray: true,
  })
  findAll() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ServiceEntity })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const service =
      await this.servicesService.findOne(+id);

    if (!service) {
      throw new NotFoundException(
        `Could not find article with ${id}.`,
      );
    }
    return service;
  }

  @Patch(':id')
  @ApiOkResponse({ type: ServiceEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServiceDto: ServiceEntity,
  ) {
    return this.servicesService.update(
      +id,
      updateServiceDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: ServiceEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.servicesService.remove(+id);
  }
}
