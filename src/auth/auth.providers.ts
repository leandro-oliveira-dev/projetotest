import { DataSource } from 'typeorm';
import { Auth } from '../entity/Auth';
import { CONFIG } from '../constants';

export const authProviders = [
  {
    provide: CONFIG.AUTH_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Auth),
    inject: [CONFIG.DATA_SOURCE],
  },
];
