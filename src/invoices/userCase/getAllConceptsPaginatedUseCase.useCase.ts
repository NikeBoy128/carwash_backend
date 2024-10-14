import { Injectable } from '@nestjs/common';
import { GetAllConceptsService } from '../services/getAllConcepts.service';
import { PaginateQueryRaw } from 'src/shared/interfaces/paginated';

@Injectable()
export class GetAllConceptsPaginatedUseCase {
  constructor(
    private readonly ConceptsPaginatedService: GetAllConceptsService,
  ) {}

  async getAllConceptsPaginated(params: PaginateQueryRaw) {
    return await this.ConceptsPaginatedService.getAllConceptsPaginated(params);
  }
}
