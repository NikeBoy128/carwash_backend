import { Injectable } from "@nestjs/common";
import { CrudUsersService } from "../services/crudUsers.service";
import { promises } from "dns";
import { CreateOrUpdateUserDto } from "../dto/user.dto";
import { UserEntity } from "src/shared/entities/user.entity";
import { PasswordService } from "src/auth/services/password.service";

@Injectable()
export class crudUserUseCase{
    constructor (private readonly crudUserService : CrudUsersService ,private readonly passwordService :PasswordService){}
    async create (userDto : CreateOrUpdateUserDto ): Promise <number>{

        const passwordHash = await this.passwordService.hash(userDto.password)
        const user: UserEntity={
            name: userDto.name,
            lastName: userDto.lastName,
            email: userDto.email,
            password :passwordHash,
        }
        const createUser = await this.crudUserService.create(user)
        return createUser
    }

}