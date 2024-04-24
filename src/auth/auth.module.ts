import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authProviders } from './auth.providers';
import { DatabaseModule } from '../database.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [...authProviders, AuthService],
})
export class AuthModule {}
