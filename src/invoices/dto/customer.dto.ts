import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateOrUpdateCustomerDto {
  @ApiProperty({
    type: Number,
    description: '1',
    required: false,
  })
  @IsNumber()
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
    type: Number,
    description: '3212313323',
    required: false,
  })
  @IsNumber()
  phone: number;
}
