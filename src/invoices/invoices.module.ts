import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { CustomerController } from './controllers/customer.controller';
import { CrudCustomersService } from './services/crudCustomers.service';
import { CrudCustomerUseCase } from './userCase/crudCustomerUseCase.useCase';
import { CustomerRepository } from './repositories/customerRepository.repository';
import { GetAllCustomersPaginatedUseCase } from './userCase/getAllCustomersPaginatedUseCase.useCase';
import { GetAllCustomersPaginatedService } from './services/getAllCustomersPaginated.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [SharedModule.forRoot()],
  controllers: [CustomerController],
  providers: [
    CrudCustomersService,
    CrudCustomerUseCase,
    CustomerRepository,
    GetAllCustomersPaginatedUseCase,
    GetAllCustomersPaginatedService,
    JwtService,
  ],
})
export class InvoicesModule {}
