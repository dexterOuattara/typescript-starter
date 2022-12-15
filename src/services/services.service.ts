import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
@ApiTags('services')
export class ServicesService {

  constructor(private prisma: PrismaService) {}


  create(createServiceDto: CreateServiceDto) {
    return this.prisma.service.create({ 
      data: createServiceDto 
    });
  }

  findAll() {
    return this.prisma.service.findMany();
  }

  findDrafts() {
    return this.prisma.service.findMany({
      where: { published: false },
    });
  }

  async findOne(id: number) {
    return this.prisma.service.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    updateServiceDto: UpdateServiceDto,
  ) {
    return this.prisma.service.update({
      where: { id },
      data: updateServiceDto,
    });
  }

  remove(id: number) {
    return this.prisma.service.delete({
      where: { id },
    });
  }
}
