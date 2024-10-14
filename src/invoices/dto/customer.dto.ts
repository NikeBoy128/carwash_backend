import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrUpdateCustomerDto {
  @ApiProperty({
    type: Number,
    description: '1',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

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
    description: '3212313323',
    required: false,
  })
  @IsString()
  phone: string;
}
