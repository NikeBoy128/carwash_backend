import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { generateTokensInterface } from '../const/authConst.const';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateTokens(payload: generateTokensInterface) {
    const accesToken = this.jwtService.sign(payload);
    return accesToken;
  }
}
