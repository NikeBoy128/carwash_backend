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
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CrudCustomerUseCase } from '../userCase/crudCustomerUseCase.useCase';
import { CreateOrUpdateCustomerDto } from '../dto/customer.dto';
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
import { PaginateQueryRaw } from 'src/shared/interfaces/paginated';
import { GetAllCustomersPaginatedUseCase } from '../userCase/getAllCustomersPaginatedUseCase.useCase';

@Controller('customer')
@ApiTags('customer')
export class CustomerController {
  constructor(
    private readonly crudCustomerCase: CrudCustomerUseCase,
    private readonly getAllCustomersPaginatedUseCase: GetAllCustomersPaginatedUseCase,
  ) {}

  @Post('/create')
  @ApiOkResponse({ type: CreatedResponse })
  async create(
    @Body()
    customerdto: CreateOrUpdateCustomerDto,
  ): Promise<CreatedResponse> {
    const customer = await this.crudCustomerCase.create(customerdto);
    return {
      message: CREATED_MESSAGE,
      id: customer,
      statusCode: HttpStatus.CREATED,
    };
  }
  @Patch('/update')
  @ApiOkResponse({ type: UpdatedResponse })
  async update(
    @Body() customerdto: CreateOrUpdateCustomerDto,
  ): Promise<UpdatedResponse> {
    await this.crudCustomerCase.update(customerdto);

    return {
      message: UPDATED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }

  @Delete('/:id')
  @ApiOkResponse({ type: DeletedResponse })
  async delete(@Param('id') id: number): Promise<DeletedResponse> {
    await this.crudCustomerCase.delete(id);
    return {
      message: DELETED_MESSAGE,
      statusCode: HttpStatus.OK,
    };
  }

  @Get('/whit-pagination')
  async getAllPagination(@Query() params: PaginateQueryRaw) {
    return await this.getAllCustomersPaginatedUseCase.getAllCustomersPaginated(
      params,
    );
  }
}
