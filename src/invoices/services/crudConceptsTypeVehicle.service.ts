import { HttpException, Injectable } from '@nestjs/common';
import { ConceptTypeVehicleRepository } from '../repositories/conceptTypeVehicleRepositorty.repository';
import { ConceptTypeVehiculeEntity } from 'src/shared/entities/conceptTypeVehicules.entity';
import { Not } from 'typeorm';

@Injectable()
export class CrudConceptsTypeVehicleService {
  constructor(
    private readonly conceptTypeVehicleRepository: ConceptTypeVehicleRepository,
  ) {}

  async createBulk(conceptTypeVehicle: ConceptTypeVehiculeEntity[]) {
    await this.conceptTypeVehicleRepository.save(conceptTypeVehicle);
  }

  async update(conceptTypeVehicle: ConceptTypeVehiculeEntity) {
    const findConceptTypeVehicle =
      await this.conceptTypeVehicleRepository.findOne({
        where: {
          typeVehiculeId: conceptTypeVehicle.typeVehiculeId,
          id: Not(conceptTypeVehicle.id),
        },
      });

    if (findConceptTypeVehicle) {
      throw new HttpException('Ya existe un concepto para este vehiculo', 400);
    }
    await this.conceptTypeVehicleRepository.update(
      conceptTypeVehicle.id,
      conceptTypeVehicle,
    );
  }
}
