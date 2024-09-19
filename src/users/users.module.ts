import { Module } from '@nestjs/common';
import { CrudUsersService } from './services/crudUsers.service';
import { UserController } from './controllers/user.controller';
import { SharedModule } from 'src/shared/shared.module';
import { crudUserUseCase } from './useCase/crudUserUseCase.useCase';
import { UserSharedRepository } from 'src/shared/repositories/userRepository.repository';
import { PasswordService } from 'src/auth/services/password.service';

@Module({
  providers: [
    CrudUsersService,
    crudUserUseCase,
    UserSharedRepository,
    PasswordService,
  ],
  controllers: [UserController],
  imports: [SharedModule.forRoot()],
})
export class UsersModule {}
