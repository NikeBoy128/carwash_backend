import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  email: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'hola123',
  })
  password: string;
}

export class RefreshTokenDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  accesToken: string;
}
