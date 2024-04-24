import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDTO): Promise<any> {
    return this.authService.login(loginDto);
  }

  @Get()
  findAll(): string {
    return 'AUTH';
  }
}
