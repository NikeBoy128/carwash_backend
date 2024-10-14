import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { ConceptsEntity } from 'src/shared/entities/concepts.entity';

@Injectable()
export class ConceptsRepository extends Repository<ConceptsEntity> {
  constructor(dataSource: DataSource) {
    super(ConceptsEntity, dataSource.createEntityManager());
  }
}
