import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

import { typeormConfig } from './config/typeorm';

export const AppDataSource = new DataSource(typeormConfig as DataSourceOptions);
