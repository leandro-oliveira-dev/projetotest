import { Controller, Get, Post, Body } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { Filmes } from '../entity/Filmes';
import { CreateFilmeDTO } from './dtos/CreateFilmeDTO';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  create(@Body() createFilmeDTO: CreateFilmeDTO): Promise<Filmes> {
    return this.filmesService.create(createFilmeDTO);
  }

  @Get()
  findAll(): Promise<Filmes[]> {
    return this.filmesService.findAll();
  }
}
