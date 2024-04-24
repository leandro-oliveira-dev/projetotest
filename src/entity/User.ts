import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Auth } from './Auth';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: true })
  enabled: boolean;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToOne(() => Auth, (auth) => auth.user)
  auth: Auth;
}
