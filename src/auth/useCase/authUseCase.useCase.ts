import { HttpException, Injectable } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserSharedRepository } from 'src/shared/repositories/userRepository.repository';
import { PasswordService } from '../services/password.service';
import { AuthDto } from '../dto/auth.dto';

@Injectable()
export class AuthUseCae {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserSharedRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async run(userCredentials: AuthDto) {
    const user = await this.userRepository.findOne({
      where: { email: userCredentials.email },
    });

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    const verifyPassword = await this.passwordService.compare(
      userCredentials.password,
      user.password,
    );

    if (!verifyPassword) {
      throw new HttpException('Password Incorrect', 500);
    }

    const token = await this.authService.generateTokens({
      userId: user.id,
      email: user.email,
    });

    return token;
  }
}
