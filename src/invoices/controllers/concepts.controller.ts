import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CrudConceptsUseCase } from '../userCase/crudConceptsUseCase';
import { CreateOrUpdateConceptsDto } from '../dto/concepts.dto';
import { CreatedResponse } from 'src/shared/dto/response.dto';
import { CREATED_MESSAGE } from 'src/shared/const/response.conts';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { PaginateQueryRaw } from 'src/shared/interfaces/paginated';
import { GetAllConceptsPaginatedUseCase } from '../userCase/getAllConceptsPaginatedUseCase.useCase';

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
  async crate(
    @Body() conceptsDto: CreateOrUpdateConceptsDto,
  ): Promise<CreatedResponse> {
    const conceptId = await this.crudConceptsUseCase.create(conceptsDto);

    return {
      message: CREATED_MESSAGE,
      statusCode: HttpStatus.CREATED,
      id: conceptId,
    };
  }

  @Get('/whit-pagination')
  async getAllConceptsPaginated(@Query() params: PaginateQueryRaw) {
    return await this.getAllConceptsPaginatedUseCase.getAllConceptsPaginated(
      params,
    );
  }
}
