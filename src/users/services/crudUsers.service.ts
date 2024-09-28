import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async update(user: UserEntity) {
    const userExist = await this.userRepository.findOne({
      where: { id: user.id },
    });

    if (!userExist) {
      throw new HttpException('Usuario no encontrado', HttpStatus.BAD_REQUEST);
    }
    await this.userRepository.update(user.id, user);
  }

  async delete(id: number) {
    const userExist = await this.userRepository.findOne({
      where: { id },
    });
    if (!userExist) {
      throw new HttpException('Usuario no encontrado', HttpStatus.BAD_REQUEST);
    }
    await this.userRepository.softDelete(id);
  }
}
