import { Controller, Get, Post, Body } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { Filmes } from '../entity/Filmes';
import { createFilmeDto } from './dtos/createFilmeDto';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  create(@Body() data: createFilmeDto): Promise<Filmes> {
    return this.filmesService.create(data);
  }

  @Get()
  findAll(): Promise<Filmes[]> {
    return this.filmesService.findAll();
  }
}
