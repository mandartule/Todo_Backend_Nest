
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './task.schema';
import { Model } from 'mongoose';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {

    constructor(
        @InjectModel(Task.name) // Injecting the Task model into the taskService
        private taskModel: Model<Task> // defining the class property taskModel as an instance of the Task model
    ) { }

    // createTask method to create a new task
    async create(createTaskDto: TaskDto): Promise<Task> {
        const newTask = new this.taskModel(createTaskDto);
        console.log(newTask);
        return newTask.save();
    }

    // getTasks method return all tasks
    async getTasks(userId : string) {
        //console.log(userId);
        const tasks = await this.taskModel.find({"user" : userId});
        //console.log(tasks); 
        return tasks;
    }

    // Add this method
    async updateTaskById(taskId: string): Promise<any> {
        const task = await this.taskModel.findById(taskId);
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, { $set: { completed: !task.completed } }, { new: true });
        console.log(updatedTask);
        return updatedTask;
    }

    async deleteTaskById(taskId: string): Promise<any> {
        const deletedTask = await this.taskModel.findByIdAndDelete(taskId);
        console.log(deletedTask);
        return deletedTask;
    }
    



}
