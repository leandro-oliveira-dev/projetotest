import { DataSource, DataSourceOptions } from 'typeorm';
import { CONFIG } from './constants';
import { typeormConfig } from './config/typeorm';

export const databaseProviders = [
  {
    provide: CONFIG.DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource(typeormConfig as DataSourceOptions);

      return dataSource.initialize();
    },
  },
];

console.log(databaseProviders);
