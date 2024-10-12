import { Injectable } from '@nestjs/common';

import { Paginated, PaginateQueryRaw } from 'src/shared/interfaces/paginated';

import { PaginatedService } from 'src/shared/services/paginated.service';
import { CustomerRepository } from '../repositories/customerRepository.repository';
import { CustomersEntity } from 'src/shared/entities/customers.entity';

@Injectable()
export class GetAllCustomersPaginatedService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly paginatedService: PaginatedService,
  ) {}

  async getAllCustomersPaginated(
    params: PaginateQueryRaw,
  ): Promise<Paginated<CustomersEntity>> {
    const customerQuery =
      this.customerRepository.createQueryBuilder('customer');

    if (params.search) {
      customerQuery.where(
        'customer.name LIKE :search OR customer.lastname LIKE :search',
        {
          search: `%${params.search}%`,
        },
      );
    }

    return await this.paginatedService.paginateRows(customerQuery, params);
  }
}
