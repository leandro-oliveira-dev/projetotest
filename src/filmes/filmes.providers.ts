import { DataSource } from 'typeorm';
import { Filmes } from '../entity/Filmes';
import { CONFIG } from '../constants';

export const filmesProviders = [
  {
    provide: CONFIG.FILMES_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Filmes),
    inject: [CONFIG.DATA_SOURCE],
  },
];
