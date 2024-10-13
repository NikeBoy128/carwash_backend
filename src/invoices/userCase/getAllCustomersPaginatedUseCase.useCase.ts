import { Injectable } from '@nestjs/common';
import { PaginateQueryRaw } from 'src/shared/interfaces/paginated';
import { GetAllCustomersPaginatedService } from '../services/getAllCustomersPaginated.service';

@Injectable()
export class GetAllCustomersPaginatedUseCase {
  constructor(
    private readonly getAllCustomersPaginatedService: GetAllCustomersPaginatedService,
  ) {}

  async getAllCustomersPaginated(params: PaginateQueryRaw) {
    return await this.getAllCustomersPaginatedService.getAllCustomersPaginated(
      params,
    );
  }
}
