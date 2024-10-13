import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CustomersEntity } from 'src/shared/entities/customers.entity';

@Injectable()
export class CustomerRepository extends Repository<CustomersEntity> {
  constructor(dataSource: DataSource) {
    super(CustomersEntity, dataSource.createEntityManager());
  }
}
