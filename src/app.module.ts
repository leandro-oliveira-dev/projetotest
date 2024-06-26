import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { FilmesModule } from './filmes/filmes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, FilmesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
