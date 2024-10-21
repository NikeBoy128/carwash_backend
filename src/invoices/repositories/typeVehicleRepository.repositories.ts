import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { VehicleTypeEntity } from 'src/shared/entities/vehicleType.entity';

@Injectable()
export class TypeVehicleRepository extends Repository<VehicleTypeEntity> {
  constructor(dataSource: DataSource) {
    super(VehicleTypeEntity, dataSource.createEntityManager());
  }
}
