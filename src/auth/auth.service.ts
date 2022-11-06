import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    // generate the password hash

    try {
      const hash = await argon.hash(dto.password);
      // save thr new user in the database
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      delete user.hash;
      // return the saved user
      return user;
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

  async signin(dto: AuthDto) {
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
    // send back the user
    delete user.hash;
    return user;
  }
}