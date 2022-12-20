import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import {
  ConfigModule,
  ConfigService,
} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeoitModule } from './deoit/deoit.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { ServicesModule } from './services/services.module';
import { ReferentsModule } from './referents/referents.module';
import { QrcodesModule } from './qrcodes/qrcodes.module';




@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (
        configService: ConfigService,
      ) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>(
          'DB_PORT',
        ),
        username: configService.get(
          'DB_USERNAME',
        ),
        password: configService.get(
          'DB_PASSWORD',
        ),
        database: configService.get('DB_NAME'),
        entities: [],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    DeoitModule,
    PrismaModule,
    ArticlesModule,
    ServicesModule,
    ReferentsModule,
    QrcodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
