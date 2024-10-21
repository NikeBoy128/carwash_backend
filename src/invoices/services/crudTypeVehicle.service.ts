import { Injectable } from '@nestjs/common';
import { TypeVehicleRepository } from '../repositories/typeVehicleRepository.repositories';
import { VehicleTypeEntity } from 'src/shared/entities/vehicleType.entity';

@Injectable()
export class CrudTypeVehicleService {
  constructor(private readonly typeVehicleRepository: TypeVehicleRepository) {}

  async create(typevehicles: VehicleTypeEntity): Promise<number> {
    const newTypevehicle = await this.typeVehicleRepository.save(typevehicles);
    return newTypevehicle.id;
  }

  async update(typevehicles: VehicleTypeEntity): Promise<void> {
    await this.typeVehicleRepository.update(typevehicles.id, typevehicles);
  }

  async delete(id: number): Promise<void> {
    await this.typeVehicleRepository.softDelete(id);
  }
}
