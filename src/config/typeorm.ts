import { Auth } from '../entity/Auth';
import { Filmes } from '../entity/Filmes';
import { User } from '../entity/User';

export const typeormConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin1234',
  database: 'testbackend',
  synchronize: true,
  logging: true,
  entities: [User, Filmes, Auth],
  subscribers: [],
  migrations: ['./src/migrations/**/*.{ts,js}'],
};
