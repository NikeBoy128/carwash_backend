import { Body, Controller, Post } from '@nestjs/common';
import { AuthUseCae } from '../useCase/authUseCase.useCase';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from '../dto/auth.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authUseCase: AuthUseCae) {}

  @Post('/login')
  async login(@Body() userData: AuthDto) {
    const accesToken = await this.authUseCase.run(userData);

    return {
      accesToken,
    };
  }
}
