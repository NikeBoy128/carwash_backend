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

@Entity('customers')
export class CustomersEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 50,
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    length: 50,
    nullable: false,
  })
  lastName: string;
  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  /*@OneToMany(
    () => InvoicesEntity,
    (invoiceCustomer) => invoiceCustomer.customer,
  )
  invoiceCustomer?: InvoicesEntity[];*/
  @OneToMany(
    () => InvoicesEntity,
    (invoiceCustomer) => invoiceCustomer.customer,
  )
  invoiceCustomer?: InvoicesEntity[];
}
