import { Injectable } from '@nestjs/common';
import { CreateQrcodeDto } from './dto/create-qrcode.dto';
import { UpdateQrcodeDto } from './dto/update-qrcode.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
@ApiTags('qrcodes')
export class QrcodesService {
  constructor(private prisma: PrismaService) {}

  create(createQrcodeDto: CreateQrcodeDto) {
    return this.prisma.qrcode.create({
      data: createQrcodeDto,
    });  
  }

  findAll() {
    return this.prisma.qrcode.findMany();
  }

  findAllQueue() {
    return this.prisma.qrcode.findMany({
      where: { queue: true },
    });
  }
  

  async findOne(id: number) {
    return this.prisma.qrcode.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    UpdateQrcodeDto: UpdateQrcodeDto,
  ) {
    return this.prisma.qrcode.update({
      where: { id },
      data: UpdateQrcodeDto,
    });
  }

  remove(id: number) {
    return this.prisma.qrcode.delete({
      where: { id },
    });  
  }


  
}
