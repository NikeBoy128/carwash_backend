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

@Entity('VehicleType')
export class VehicleType {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  label: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  icon: string;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @OneToMany(
    () => ConceptTypeVehiculeEntity,
    (conceptTypeVehicule) => conceptTypeVehicule.vehicleType,
  )
  conceptTypeVehicule?: ConceptTypeVehiculeEntity[];
}
