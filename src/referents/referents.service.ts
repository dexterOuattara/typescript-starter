import { Injectable } from '@nestjs/common';
import { CreateReferentDto } from './dto/create-referent.dto';
import { UpdateReferentDto } from './dto/update-referent.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
@ApiTags('referents')
export class ReferentsService {
  constructor(private prisma: PrismaService) {}

  create(createReferentDto: CreateReferentDto) {
    return this.prisma.referent.create({
      data: createReferentDto,
    });
  }

  findAll() {
    return this.prisma.referent.findMany();
  }

  async findOne(id: number) {
    return this.prisma.referent.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    updateReferentDto: UpdateReferentDto,
  ) {
    return this.prisma.referent.update({
      where: { id },
      data: updateReferentDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: { id },
    });
  }
}
