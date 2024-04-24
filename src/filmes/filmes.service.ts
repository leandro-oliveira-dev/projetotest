import { Inject, Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { Filmes } from '../entity/Filmes';
import { createFilmeDto } from './dtos/createFilmeDto';
import { CONFIG } from '../constants';

@Injectable()
export class FilmesService {
  constructor(
    @Inject(CONFIG.FILMES_REPOSITORY)
    private filmesRepository: Repository<Filmes>,
  ) {}

  async create({ name, year, description }: createFilmeDto): Promise<Filmes> {
    const filme = this.filmesRepository.create({ name, year, description });

    return await this.filmesRepository.save(filme);
  }

  async findAll(): Promise<Filmes[]> {
    return await this.filmesRepository.find();
  }
}
