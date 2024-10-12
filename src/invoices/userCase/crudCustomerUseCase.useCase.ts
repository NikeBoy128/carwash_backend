import { Injectable } from '@nestjs/common';
import { CreateOrUpdateCustomerDto } from '../dto/customer.dto';
import { CrudCustomersService } from '../services/crudCustomers.service';
import { CustomersEntity } from 'src/shared/entities/customers.entity';

@Injectable()
export class CrudCustomerUseCase {
  constructor(private readonly crudCustomerService: CrudCustomersService) {}
  async create(customerDto: CreateOrUpdateCustomerDto): Promise<number> {
    const customer: CustomersEntity = {
      name: customerDto.name,
      lastName: customerDto.lastName,
      phone: customerDto.phone,
    };
    const createCustomer = await this.crudCustomerService.create(customer);

    return createCustomer;
  }
  async update(customerDto: CreateOrUpdateCustomerDto) {
    const customer: CustomersEntity = {
      id: customerDto.id,
      name: customerDto.name,
      lastName: customerDto.lastName,
      phone: customerDto.phone,
    };

    await this.crudCustomerService.update(customer);
  }

  async delete(id: number): Promise<void> {
    await this.crudCustomerService.delete(id);
  }
}
