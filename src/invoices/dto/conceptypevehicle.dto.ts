import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class CreateOrUpdateConceptTypeVehicle {
  @ApiProperty({
    type: Number,
    nullable: true,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    type: Number,
    nullable: false,
    required: true,
  })
  @IsNumber()
  conceptId: number;

  @ApiProperty({
    type: Number,
    nullable: false,
    required: true,
  })
  @IsNumber()
  typeVehiculeId: number;

  @ApiProperty({
    type: Number,
    nullable: false,
    required: true,
  })
  @IsNumber()
  value: number;
}
