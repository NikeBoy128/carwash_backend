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
import { InvoicesEntity } from './invoices.entity';

@Entity('InvoicesStatus')
export class InvoicesStatusEntity {
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

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  code: string;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @OneToMany(() => InvoicesEntity, (invoiceStatus) => invoiceStatus.invoice)
  invoice?: InvoicesEntity[];
}
