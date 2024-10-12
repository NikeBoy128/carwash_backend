import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CustomerRepository } from '../repositories/customerRepository.repository';
import { CustomersEntity } from 'src/shared/entities/customers.entity';

@Injectable()
export class CrudCustomersService {
  constructor(private readonly customerRepository: CustomerRepository) {}
  async create(customer: CustomersEntity): Promise<number> {
    const customerCreated = await this.customerRepository.save(customer);
    return customerCreated.id;
  }

  async update(customer: CustomersEntity) {
    const customerExist = await this.customerRepository.findOne({
      where: { id: customer.id },
    });

    if (!customerExist) {
      throw new HttpException('Usuario no encontrado', HttpStatus.BAD_REQUEST);
    }
    await this.customerRepository.update(customer.id, customer);
  }

  async delete(id: number) {
    const customerExist = await this.customerRepository.findOne({
      where: { id },
    });
    if (!customerExist) {
      throw new HttpException('Usuario no encontrado', HttpStatus.BAD_REQUEST);
    }
    await this.customerRepository.softDelete(id);
  }
}
