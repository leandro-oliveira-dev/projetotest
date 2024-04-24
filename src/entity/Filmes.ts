import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Filmes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  year: number;

  @Column()
  description: string;
}
