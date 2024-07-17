import { Module } from '@nestjs/common';

import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './task.schema';

import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),],

  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService]
})
export class TaskModule { }
