import { ApiProperty } from '@nestjs/swagger';
import { CREATED_MESSAGE } from '../const/response.conts';

export class CreatedResponse {
  @ApiProperty({
    type: String,
    description: CREATED_MESSAGE,
    required: false,
  })
  message: string;

  @ApiProperty({
    type: Number,
    description: '1',
    required: false,
  })
  id: number;

  @ApiProperty({
    type: Number,
    example: 200,
  })
  statusCode: number;
}