import { Injectable } from '@nestjs/common';
import { promises } from 'dns';
import { UserEntity } from 'src/shared/entities/user.entity';
import { UserSharedRepository } from 'src/shared/repositories/userRepository.repository';

@Injectable()
export class CrudUsersService {
    constructor(private readonly userRepository : UserSharedRepository){}
    async create (user:UserEntity): Promise <number>{
        const userCreated = await this.userRepository.save(user)
        return userCreated.id
    }
}

