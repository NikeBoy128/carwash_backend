import { Injectable } from '@nestjs/common';
import { ConceptsRepository } from '../repositories/conceptsRepository.repositories';
import { Paginated, PaginateQueryRaw } from 'src/shared/interfaces/paginated';
import { ConceptsEntity } from 'src/shared/entities/concepts.entity';
import { PaginatedService } from 'src/shared/services/paginated.service';

@Injectable()
export class GetAllConceptsService {
  constructor(
    private readonly conceptsRepositort: ConceptsRepository,
    private readonly paginatedService: PaginatedService,
  ) {}

  async getAllConceptsPaginated(
    params: PaginateQueryRaw,
  ): Promise<Paginated<ConceptsEntity>> {
    const conceptsQuery = this.conceptsRepositort
      .createQueryBuilder('concepts')
      .innerJoinAndSelect('concepts.conceptTypeVehicule', 'conceptTypeVehicule')
      .innerJoinAndSelect('conceptTypeVehicule.vehicleType', 'typeVehicle');

    if (params.search) {
      conceptsQuery.where('concepts.description LIKE :search', {
        search: `%${params.search}%`,
      });
    }

    return await this.paginatedService.paginateRows(conceptsQuery, params);
  }
}
