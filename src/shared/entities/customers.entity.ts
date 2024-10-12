import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
<<<<<<< HEAD
} from 'typeorm';
=======
  OneToMany,
} from 'typeorm';
import { InvoicesEntity } from './invoices.entity';
>>>>>>> 61261b911dbfde031939c08b06dcba3ede4ef7dc

@Entity('customers')
export class CustomersEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  lastName: string;
  @Column({ type: 'bigint' })
  phone: number;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

<<<<<<< HEAD
  /*@OneToMany(
    () => InvoicesEntity,
    (invoiceCustomer) => invoiceCustomer.customer,
  )
  invoiceCustomer?: InvoicesEntity[];*/
=======
  @OneToMany(
    () => InvoicesEntity,
    (invoiceCustomer) => invoiceCustomer.customer,
  )
  invoiceCustomer?: InvoicesEntity[];
>>>>>>> 61261b911dbfde031939c08b06dcba3ede4ef7dc
}
