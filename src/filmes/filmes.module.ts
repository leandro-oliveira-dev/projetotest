import { Module } from '@nestjs/common';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';
import { DatabaseModule } from '../database.module';
import { filmesProviders } from './filmes.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FilmesController],
  providers: [...filmesProviders, FilmesService],
})
export class FilmesModule {}
