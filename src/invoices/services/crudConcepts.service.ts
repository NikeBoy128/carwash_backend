import { Injectable } from '@nestjs/common';
import { ConceptsRepository } from '../repositories/conceptsRepository.repositories';
import { ConceptsEntity } from 'src/shared/entities/concepts.entity';

@Injectable()
export class CrudConceptsService {
  constructor(private readonly conceptsRepository: ConceptsRepository) {}

  async create(concepts: ConceptsEntity): Promise<number> {
    const newConcept = await this.conceptsRepository.save(concepts);
    return newConcept.id;
  }

  async update(concepts: ConceptsEntity): Promise<void> {
    await this.conceptsRepository.update(concepts.id, concepts);
  }

  async delete(id: number): Promise<void> {
    await this.conceptsRepository.softDelete(id);
  }
}
