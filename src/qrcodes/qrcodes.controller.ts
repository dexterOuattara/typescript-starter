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
import { QrcodesService } from './qrcodes.service';
import { CreateQrcodeDto } from './dto/create-qrcode.dto';
import { UpdateQrcodeDto } from './dto/update-qrcode.dto';

import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { QrcodeEntity } from './entities/qrcode.entity';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception.filter';


@Controller('qrcodes')
@ApiTags('qrcodes')
@UseFilters(PrismaClientExceptionFilter)
export class QrcodesController {
  constructor(
    private readonly qrcodesService: QrcodesService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: QrcodeEntity })
  async create(
    @Body() createQrcodeDto: CreateQrcodeDto,
  ) {
    return this.qrcodesService.create(
      createQrcodeDto,
    );
  }

  @Get()
  @ApiOkResponse({
    type: QrcodeEntity,
    isArray: true,
  })  findAll() {
    return this.qrcodesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: QrcodeEntity })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const qrcode =
    await this.qrcodesService.findOne(+id);
    if (!qrcode) {
      throw new NotFoundException(
        `Could not find referent with ${id}.`,
      );
    }
    return qrcode;
  }

  @Patch(':id')
  @ApiOkResponse({ type: QrcodeEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateQrcodeDto: UpdateQrcodeDto,
  ) {
    return this.qrcodesService.update(
      +id,
      UpdateQrcodeDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: QrcodeEntity })
  remove(@Param('id') code: string) {
    return this.qrcodesService.remove(+code);
  }
}
