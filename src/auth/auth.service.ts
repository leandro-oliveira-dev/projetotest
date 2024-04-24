import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Auth } from '../entity/Auth';
import { LoginDTO } from './dtos/login.dto';
import { CONFIG } from '../constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CONFIG.AUTH_REPOSITORY)
    private authRepository: Repository<Auth>,
  ) {}

  async login({ email, password }: LoginDTO): Promise<Auth> {
    const auth = await this.authRepository.findOne({
      where: {
        email,
        password,
      },
    });

    return auth;
  }
}
