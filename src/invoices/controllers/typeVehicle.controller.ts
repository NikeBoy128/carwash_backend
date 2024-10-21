import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  CreatedResponse,
  DeletedResponse,
  UpdatedResponse,
} from 'src/shared/dto/response.dto';
import {
  CREATED_MESSAGE,
  DELETED_MESSAGE,
  UPDATED_MESSAGE,
} from 'src/shared/const/response.conts';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { CrudTypeVehicleUseCase } from '../userCase/crudTypeVehicleUseCase';
import { CreateOrUpdateTypeVehiclesDto } from '../dto/typeVehicles.dto';

@Controller('typeVehicles')
@ApiTags('typeVehicles')
export class TypeVehiclesController {
  constructor(
    private readonly crudTypeVehicleUseCase: CrudTypeVehicleUseCase,
  ) {}

  @Post('/')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async create(
    @Body() typevehicleDto: CreateOrUpdateTypeVehiclesDto,
  ): Promise<CreatedResponse> {
    const typevehicleId =
      await this.crudTypeVehicleUseCase.create(typevehicleDto);

    return {
      message: CREATED_MESSAGE,
      statusCode: HttpStatus.CREATED,
      id: typevehicleId,
    };
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch('/update')
  @ApiOkResponse({ type: UpdatedResponse })
  async update(
    @Body() typevehicleDto: CreateOrUpdateTypeVehiclesDto,
  ): Promise<UpdatedResponse> {
    await this.crudTypeVehicleUseCase.update(typevehicleDto);

    return {
      message: UPDATED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete('/:id')
  @ApiOkResponse({ type: DeletedResponse })
  async delete(@Param('id') id: number): Promise<DeletedResponse> {
    await this.crudTypeVehicleUseCase.delete(id);
    return {
      message: DELETED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }

  @Get('/')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiQuery({ name: 'search', required: false })
  async getAll(@Query('search') search?: string) {
    return await this.crudTypeVehicleUseCase.getAll(search);
  }
}
