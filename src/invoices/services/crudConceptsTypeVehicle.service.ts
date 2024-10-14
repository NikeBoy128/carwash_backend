import { Injectable } from '@nestjs/common';
import { ConceptTypeVehicleRepository } from '../repositories/conceptTypeVehicleRepositorty.repository';
import { ConceptTypeVehiculeEntity } from 'src/shared/entities/conceptTypeVehicules.entity';

@Injectable()
export class CrudConceptsTypeVehicleService {
  constructor(
    private readonly conceptTypeVehicleRepository: ConceptTypeVehicleRepository,
  ) {}

  async createBulk(conceptTypeVehicle: ConceptTypeVehiculeEntity[]) {
    await this.conceptTypeVehicleRepository.save(conceptTypeVehicle);
  }
}
