import { Injectable } from '@nestjs/common';
import { CrudUsersService } from '../services/crudUsers.service';
import { CreateOrUpdateUserDto } from '../dto/user.dto';
import { UserEntity } from 'src/shared/entities/user.entity';
import { PasswordService } from 'src/auth/services/password.service';

@Injectable()
export class CrudUserUseCase {
  constructor(
    private readonly crudUserService: CrudUsersService,
    private readonly passwordService: PasswordService,
  ) {}
  async create(userDto: CreateOrUpdateUserDto): Promise<number> {
    const passwordHash = await this.passwordService.hash(userDto.password);
    const user: UserEntity = {
      name: userDto.name,
      lastName: userDto.lastName,
      email: userDto.email,
      password: passwordHash,
    };
    const createUser = await this.crudUserService.create(user);
    return createUser;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.crudUserService.getAllUsers();
    return users;
  }
  /*
  async update(id: number, userDto: CreateOrUpdateUserDto): Promise<number> {
    const passwordHash = await this.passwordService.hash(userDto.password);
    const user: UserEntity = {
      name: userDto.name,
      lastName: userDto.lastName,
      email: userDto.email,
      password: passwordHash,
    };
    const updateUser = await this.crudUserService.update(id, user);
    return updateUser;
  }
    async findOne(id): Promise<UserEntity> {
    return await this.crudUserService.findOne(id);
  }*/
  async delete(id: number): Promise<void> {
    await this.crudUserService.delete(id);
  }
}
