import {
  HttpException,
  HttpStatus,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  AuthDto,
  AuthsignDto,
  UpdatePasswordDto,
} from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);

    try {
      // save thr new user in the database
      const user = await this.prisma.user.create({
        data: {
          hash,
          firstName: dto.firstName,
          lastName: dto.lastName,
          email: dto.email,
          gender: dto.gender,
          role: dto.role,
          telephone: dto.telephone,
          photo: dto.photo,
          birthday: dto.birthday,
        },
      });

      return this.signToken(user.id, user.email);
    } catch (error) {
      if (
        error instanceof
        PrismaClientKnownRequestError
      ) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Credentials taken',
          );
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthsignDto) {
    // find the user by email address
    const user =
      await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });
    //if user is not found throw an exception
    if (!user)
      throw new ForbiddenException(
        'Credentials incorrect',
      );
    // compare the password
    const pwMatches = await argon.verify(
      user.hash,
      dto.password,
    );
    // if password incorrect throw an exception
    if (!pwMatches)
      throw new ForbiddenException(
        'Credentials incorrects',
      );
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(
      payload,
      {
        expiresIn: '15m',
        secret: secret,
      },
    );

    return {
      access_token: token,
    };
  }


  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  //use by user module to change user password
  async updatePassword(
    dto: UpdatePasswordDto,
    id: number,
  ): Promise<User> {
    const user =
      await this.prisma.user.findUnique({
        where: { id },
      });
    if (!user) {
      throw new HttpException(
        'invalid_credentials',
        HttpStatus.UNAUTHORIZED,
      );
    }
    // compare the password
    const pwMatches = await argon.verify(
      user.hash,
      dto.old_password,
    );
    // if password incorrect throw an exception
    if (!pwMatches)
      throw new ForbiddenException(
        'Credentials incorrects',
      );
    return await this.prisma.user.update({
      where: { id },
      data: {
        hash: await argon.hash(dto.new_password),
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }


  findAllUserProfile() {
    return this.prisma.user.findMany({
      include: {
        referents: true,
        qrcodes: true
      },
      take: 10
    });
  }

  findAllUserPerAricle() {
    return this.prisma.user.findMany({
      include: {
        articles: true,
      },
      take: 10
    });
  }


  findAllUserPerQrcode() {
    return this.prisma.user.findMany({
      include: {
        qrcodes: true,
      },
      take: 10
    });
  }


  allpatients() {
    return this.prisma.user.findMany({
      where: { role: "PATIENT" },
      take: 10
    });
  }


  allstandardists() {
    return this.prisma.user.findMany({
      where: { role: "STANDARDIST" },
      take: 10
    });
  }
  

  alladmins() {
    return this.prisma.user.findMany({
      where: { role: "ADMIN" },
      take: 10
    });
  }
}
