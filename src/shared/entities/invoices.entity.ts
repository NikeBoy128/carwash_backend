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
import { VehicleTypeEntity } from './vehicleType.entity';
import { UserEntity } from './user.entity';
import { BrandEntity } from './brand.entity';
import { CustomersEntity } from './customers.entity';
import { InvoicesStatusEntity } from './invoicesStatus.entity';

@Entity('Invoices')
export class InvoicesEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ type: 'bigint', nullable: false })
  vehicleTypeId: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  plateLicence: string;
  //enum de marcas automiviles
  @Column({ type: 'bigint', nullable: false })
  brandId: string;
  // 3 fk
  @Column({ type: 'bigint', nullable: false })
  userCreatedId: number;

  @Column({ type: 'bigint', nullable: false })
  employeedId: number;

  @Column({ type: 'bigint', nullable: false })
  invoiceStatusId: number;
  //enum vehiculesstatus
  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  vehiculeStatus: string;

  @Column('double', {
    precision: 10,
    scale: 2,
    nullable: false,
  })
  amont: number;

  @Column({ type: 'bigint', nullable: false })
  customerId: number;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @ManyToOne(
    () => VehicleTypeEntity,
    (TypeVehicule) => TypeVehicule.vehicleTypeInvoice,
  )
  @JoinColumn({ name: 'vehicleTypeId' })
  vehicleTypeInvoice?: VehicleTypeEntity;

  @ManyToOne(() => UserEntity, (user) => user.invoiceUser)
  @JoinColumn({ name: 'userCreatedId' })
  user?: UserEntity;

  @ManyToOne(() => BrandEntity, (brand) => brand.invoiceBrand)
  @JoinColumn({ name: 'brandId' })
  brand?: BrandEntity;

  @ManyToOne(
    () => InvoicesStatusEntity,
    (invoiceStatus) => invoiceStatus.invoice,
  )
  @JoinColumn({ name: 'invoiceStatusId' })
  invoice?: InvoicesStatusEntity;

  @ManyToOne(() => CustomersEntity, (customer) => customer.invoiceCustomer)
  @JoinColumn({ name: 'customerId' })
  customer?: CustomersEntity;

  //employee
  @ManyToOne(() => UserEntity, (employee) => employee.invoiceEmployee)
  @JoinColumn({ name: 'employeeId' })
  employee?: UserEntity;
}
