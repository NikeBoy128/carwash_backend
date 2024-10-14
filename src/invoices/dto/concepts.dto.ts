import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateOrUpdateConceptTypeVehicle } from './conceptypevehicle.dto';
import { Type } from 'class-transformer';

export class CreateOrUpdateConceptsDto {
  @ApiProperty({
    type: Number,
    nullable: true,
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
  description: string;

  @ApiProperty({
    type: [CreateOrUpdateConceptTypeVehicle],
    nullable: false,
    required: true,
  })
  @IsArray()
  @Type(() => CreateOrUpdateConceptTypeVehicle)
  conceptTypeVehicule: CreateOrUpdateConceptTypeVehicle[];
}
