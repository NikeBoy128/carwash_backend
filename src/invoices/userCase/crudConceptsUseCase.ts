import { Injectable } from '@nestjs/common';
import { CrudConceptsService } from '../services/crudConcepts.service';
import { CreateOrUpdateConceptsDto } from '../dto/concepts.dto';
import { ConceptsEntity } from 'src/shared/entities/concepts.entity';
import { ConceptTypeVehiculeEntity } from 'src/shared/entities/conceptTypeVehicules.entity';

import { CrudConceptsTypeVehicleService } from '../services/crudConceptsTypeVehicle.service';

@Injectable()
export class CrudConceptsUseCase {
  constructor(
    private readonly crudConceptsService: CrudConceptsService,
    private readonly crudConceptTypeVehiculeService: CrudConceptsTypeVehicleService,
  ) {}

  async create(conceptsDto: CreateOrUpdateConceptsDto): Promise<number> {
    const newConcept: ConceptsEntity = {
      description: conceptsDto.description,
    };

    const conceptId = await this.crudConceptsService.create(newConcept);

    const conceptTypeVehicle: ConceptTypeVehiculeEntity[] =
      conceptsDto.conceptTypeVehicule.map((conceptTypeVehicule) => {
        return {
          conceptId: conceptId,
          value: conceptTypeVehicule.value,
          typeVehiculeId: conceptTypeVehicule.typeVehiculeId,
        };
      });

    await this.crudConceptTypeVehiculeService.createBulk(conceptTypeVehicle);

    return conceptId;
  }

  async update(conceptsDto: CreateOrUpdateConceptsDto) {
    const concepts: ConceptsEntity = {
      id: conceptsDto.id,
      description: conceptsDto.description,
    };

    await this.crudConceptsService.update(concepts);
  }

  async delete(id: number): Promise<void> {
    await this.crudConceptsService.delete(id);
  }
}
