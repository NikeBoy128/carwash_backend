import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { crudUserUseCase } from '../useCase/crudUserUseCase.useCase';
import { CreateOrUpdateUserDto } from '../dto/user.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreatedResponse } from 'src/shared/dto/response.dto';
import { CREATED_MESSAGE } from 'src/shared/const/response.conts';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userCase: crudUserUseCase) {}
  @Post('/create')
  @ApiOkResponse({ type: CreatedResponse })
  async create(
    @Body()
    userdto: CreateOrUpdateUserDto,
  ): Promise<CreatedResponse> {
    const user = await this.userCase.create(userdto);
    return {
      message: CREATED_MESSAGE,
      id: user,
      statusCode: HttpStatus.CREATED,
    };
  }
}
