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
import { RolesUserEntity } from './rolesUser.entity';
import { InvoicesEntity } from './invoices.entity';

@Entity('Users')
export class UserEntity {
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

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  password?: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  email: string;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @OneToMany(() => RolesUserEntity, (rolesUser) => rolesUser.user)
  rolesUser?: RolesUserEntity[];

  @OneToMany(() => InvoicesEntity, (invoiceUser) => invoiceUser.user)
  invoiceUser?: InvoicesEntity[];

  @OneToMany(
    () => InvoicesEntity,
    (invoiceEmployee) => invoiceEmployee.employee,
  )
  invoiceEmployee?: InvoicesEntity[];
}
