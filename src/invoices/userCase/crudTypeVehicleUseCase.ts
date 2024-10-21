import { Injectable } from '@nestjs/common';
import { CrudTypeVehicleService } from '../services/crudTypeVehicle.service';
import { CreateOrUpdateTypeVehiclesDto } from '../dto/typeVehicles.dto';
import { VehicleTypeEntity } from 'src/shared/entities/vehicleType.entity';

@Injectable()
export class CrudTypeVehicleUseCase {
  constructor(
    private readonly crudTypeVehicleService: CrudTypeVehicleService,
  ) {}
  async create(typevehicleDto: CreateOrUpdateTypeVehiclesDto): Promise<number> {
    const typevehicle: VehicleTypeEntity = {
      label: typevehicleDto.label,
      icon: typevehicleDto.icon,
    };
    const createtypeVehicle =
      await this.crudTypeVehicleService.create(typevehicle);

    return createtypeVehicle;
  }
  async update(typevehicleDto: CreateOrUpdateTypeVehiclesDto) {
    const typevehicle: VehicleTypeEntity = {
      id: typevehicleDto.id,
      label: typevehicleDto.label,
      icon: typevehicleDto.icon,
    };

    await this.crudTypeVehicleService.update(typevehicle);
  }

  async delete(id: number): Promise<void> {
    await this.crudTypeVehicleService.delete(id);
  }

  async getAll(search?: string) {
    return await this.crudTypeVehicleService.getAll(search);
  }
}
