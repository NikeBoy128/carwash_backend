import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { ConceptTypeVehiculeEntity } from 'src/shared/entities/conceptTypeVehicules.entity';

@Injectable()
export class ConceptTypeVehicleRepository extends Repository<ConceptTypeVehiculeEntity> {
  constructor(dataSource: DataSource) {
    super(ConceptTypeVehiculeEntity, dataSource.createEntityManager());
  }
}
