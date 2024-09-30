import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

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
  @IsString()
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

  @ApiProperty({
    type: Array,
    nullable: false,
    required: true,
    example: [1, 2, 3],
  })
  @IsArray()
  roles: number[];
}
