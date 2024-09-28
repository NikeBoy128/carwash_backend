import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/shared/entities/user.entity';
import { UserSharedRepository } from 'src/shared/repositories/userRepository.repository';

@Injectable()
export class CrudUsersService {
  constructor(private readonly userRepository: UserSharedRepository) {}
  async create(user: UserEntity): Promise<number> {
    const userCreated = await this.userRepository.save(user);
    return userCreated.id;
  }
  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    return users;
  }
  /*
  async update(id: number, user: UserEntity): Promise<number> {
    await this.userRepository.update(user.id, user);
    return user.id;

  }
    async findOne(id): Promise<UserEntity> {
    return await this.userRepository.findOne(id);
  }*/
  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
