import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { crudUserUseCase } from '../useCase/crudUserUseCase.useCase';
import { CreateOrUpdateUserDto } from '../dto/user.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreatedResponse } from 'src/shared/dto/response.dto';
import {
  CREATED_MESSAGE,
  //UPDATED_MESSAGE,
} from 'src/shared/const/response.conts';

@ApiTags('user')
@Controller('user')
export class UserController {
  CrudUsersService: any;
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

  @Get('/init-data')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async initData(@Req() req) {
    const userId = req.user.id;
    const data = await this.initDataUseCase.initData(userId);
    return data;
  }
  @Get('/')
  @ApiOkResponse({ description: 'Obtiene todos los usuarios' })
  async getAllUsers() {
    const users = await this.userCase.getAllUsers();
    return users;
  }
  @Delete('/:id')
  @ApiOkResponse({ description: 'Usuario eliminado correctamente' })
  public async delete(@Param('id') id: number): Promise<void> {
    await this.userCase.delete(id);
  }

  /*
  @Get('/:id')
  public async findOne(@Param('id') id: number): Promise<UserEntity> {
    return await this.userCase.findOne(id);
  }
  @Patch('/:id')
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del usuario a actualizar',
  })
  @ApiOkResponse({ type: CreatedResponse })
  async updateUser(
    @Param('id') id: number,
    @Body()
    userdto: CreateOrUpdateUserDto,
  ): Promise<CreatedResponse> {
    const user = await this.userCase.update(id, userdto);
    return {
      message: UPDATED_MESSAGE,
      id: user,
      statusCode: HttpStatus.OK,
    };
  }*/
}
