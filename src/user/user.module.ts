import { Module } from "@nestjs/common";
import { UserController } from './user.controller';
import { AuthService } from "src/auth/auth.service";
import { JwtStrategy } from "src/auth/strategy";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [JwtModule.register({
        
  })],
  controllers: [UserController],
  providers: [AuthService, JwtStrategy],

})

export class UserModule {}
