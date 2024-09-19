import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SharedModule.forRoot(), AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
