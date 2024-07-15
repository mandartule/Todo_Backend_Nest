import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [TaskController]
})
export class TaskModule {}
