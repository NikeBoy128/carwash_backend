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
import { CrudConceptsUseCase } from '../userCase/crudConceptsUseCase';
import { CreateOrUpdateConceptsDto } from '../dto/concepts.dto';
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
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { PaginateQueryRaw } from 'src/shared/interfaces/paginated';
import { GetAllConceptsPaginatedUseCase } from '../userCase/getAllConceptsPaginatedUseCase.useCase';
import { CreateOrUpdateConceptTypeVehicle } from '../dto/conceptypevehicle.dto';

@Controller('concepts')
@ApiTags('concepts')
export class ConceptsController {
  constructor(
    private readonly crudConceptsUseCase: CrudConceptsUseCase,
    private readonly getAllConceptsPaginatedUseCase: GetAllConceptsPaginatedUseCase,
  ) {}

  @Post('/')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async create(
    @Body() conceptsDto: CreateOrUpdateConceptsDto,
  ): Promise<CreatedResponse> {
    const conceptId = await this.crudConceptsUseCase.create(conceptsDto);

    return {
      message: CREATED_MESSAGE,
      statusCode: HttpStatus.CREATED,
      id: conceptId,
    };
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch('/update')
  @ApiOkResponse({ type: UpdatedResponse })
  async update(
    @Body() conceptsDto: CreateOrUpdateConceptsDto,
  ): Promise<UpdatedResponse> {
    await this.crudConceptsUseCase.update(conceptsDto);

    return {
      message: UPDATED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('/whit-pagination')
  async getAllConceptsPaginated(@Query() params: PaginateQueryRaw) {
    return await this.getAllConceptsPaginatedUseCase.getAllConceptsPaginated(
      params,
    );
  }

  @Delete('/:id')
  @ApiOkResponse({ type: DeletedResponse })
  async delete(@Param('id') id: number): Promise<DeletedResponse> {
    await this.crudConceptsUseCase.delete(id);
    return {
      message: DELETED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }

  @Patch('/update-concept-type-vehicule')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async updateConceptTypeVehicule(
    @Body() conceptsTypeVehiculeDto: CreateOrUpdateConceptTypeVehicle,
  ): Promise<UpdatedResponse> {
    await this.crudConceptsUseCase.updateConceptTyeVehicule(
      conceptsTypeVehiculeDto,
    );

    return {
      message: UPDATED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }
}
