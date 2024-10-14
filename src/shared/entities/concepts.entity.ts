import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { ConceptTypeVehiculeEntity } from './conceptTypeVehicules.entity';

@Entity('Concepts')
export class ConceptsEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  description: string;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @OneToMany(
    () => ConceptTypeVehiculeEntity,
    (conceptTypeVehicule) => conceptTypeVehicule.concept,
  )
  conceptTypeVehicule?: ConceptTypeVehiculeEntity[];
}
