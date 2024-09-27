import { Injectable } from '@nestjs/common';
import { UserSharedRepository } from 'src/shared/repositories/userRepository.repository';

@Injectable()
export class InitDataUseCase {
  constructor(private readonly sharedUserRepository: UserSharedRepository) {}

  async initData(userId: number) {
    const user = await this.sharedUserRepository.findOne({
      where: { id: userId },
    });

    delete user.password;
    return user;
  }
}
