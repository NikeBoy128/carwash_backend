import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { ConceptsEntity } from './concepts.entity';
import { VehicleTypeEntity } from './vehicleType.entity';

@Entity('ConceptTypes')
export class ConceptTypeVehiculeEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ type: 'bigint', nullable: false })
  conceptId: number;

  @Column({ type: 'bigint', nullable: false })
  typeVehiculeId: number;

  @Column('double', {
    precision: 10,
    scale: 2,
    nullable: false,
  })
  value: number;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @ManyToOne(() => ConceptsEntity, (concept) => concept.conceptTypeVehicule)
  @JoinColumn({ name: 'conceptId' })
  concept?: ConceptsEntity;

  @ManyToOne(
    () => VehicleTypeEntity,
    (vehicleType) => vehicleType.conceptTypeVehicule,
  )
  @JoinColumn({ name: 'typeVehiculeId' })
  vehicleType?: VehicleTypeEntity;
}
