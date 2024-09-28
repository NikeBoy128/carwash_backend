import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateOrUpdateUserDto {
  @ApiProperty({
    type: Number,
    nullable: true,
    required: false,
  })
  @IsString()
  id: number;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  lastName: string;

  @ApiProperty({
    type: String,
    nullable: false,
    required: false,
  })
  @IsOptional()
  @IsString()
  password: string;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsString()
  email: string;
}
