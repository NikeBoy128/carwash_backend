import { Body, Controller, Post } from '@nestjs/common';
import { crudUserUseCase } from '../useCase/crudUserUseCase.useCase';
import { CreateOrUpdateUserDto } from '../dto/user.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("user")
@Controller('user')
export class UserController {
    constructor (private readonly userCase : crudUserUseCase){}
    @Post("/create")
    async create(
        @Body()
        userdto : CreateOrUpdateUserDto){
        const user = await this.userCase.create(userdto)
        return user
        }
    
}
