import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { CustomerController } from './controllers/customer.controller';
import { CrudCustomersService } from './services/crudCustomers.service';
import { CrudCustomerUseCase } from './userCase/crudCustomerUseCase.useCase';
import { CustomerRepository } from './repositories/customerRepository.repository';
import { GetAllCustomersPaginatedUseCase } from './userCase/getAllCustomersPaginatedUseCase.useCase';
import { GetAllCustomersPaginatedService } from './services/getAllCustomersPaginated.service';
import { JwtService } from '@nestjs/jwt';
import { CrudConceptsService } from './services/crudConcepts.service';
import { CrudConceptsTypeVehicleService } from './services/crudConceptsTypeVehicle.service';
import { ConceptsController } from './controllers/concepts.controller';
import { CrudConceptsUseCase } from './userCase/crudConceptsUseCase';
import { ConceptsRepository } from './repositories/conceptsRepository.repositories';
import { ConceptTypeVehicleRepository } from './repositories/conceptTypeVehicleRepositorty.repository';
import { GetAllConceptsService } from './services/getAllConcepts.service';
import { GetAllConceptsPaginatedUseCase } from './userCase/getAllConceptsPaginatedUseCase.useCase';
import { TypeVehiclesController } from './controllers/typeVehicle.controller';
import { CrudTypeVehicleService } from './services/crudTypeVehicle.service';
import { CrudTypeVehicleUseCase } from './userCase/crudTypeVehicleUseCase';
import { TypeVehicleRepository } from './repositories/typeVehicleRepository.repositories';

@Module({
  imports: [SharedModule.forRoot()],
  controllers: [CustomerController, ConceptsController, TypeVehiclesController],
  providers: [
    CrudCustomersService,
    CrudCustomerUseCase,
    CustomerRepository,
    GetAllCustomersPaginatedUseCase,
    GetAllCustomersPaginatedService,
    JwtService,
    CrudConceptsService,
    CrudConceptsTypeVehicleService,
    CrudConceptsUseCase,
    CrudTypeVehicleService,
    CrudTypeVehicleUseCase,
    TypeVehicleRepository,
    ConceptsRepository,
    ConceptTypeVehicleRepository,
    GetAllConceptsService,
    GetAllConceptsPaginatedUseCase,
  ],
})
export class InvoicesModule {}
