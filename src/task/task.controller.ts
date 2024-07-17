import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { AuthGuard } from '@nestjs/passport';
import { TaskDto } from './task.dto';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Post()
    @UseGuards(AuthGuard())
    async create(@Body() createTaskDto: TaskDto, @Req() req) {
        const userId = req.user._id; // Get user ID from request
        return this.taskService.create({ ...createTaskDto, user: userId });
    }

    @Get()
    @UseGuards(AuthGuard())
    async get(@Req() req) {
        const userId = req.user._id; // Get user ID from request
        return await this.taskService.getTasks(userId);
    }
    
    @Get('/:taskId')
    @UseGuards(AuthGuard())
    async updateTaskById(@Param('taskId') taskId: string) {
        return await this.taskService.updateTaskById(taskId);
    }

    @Delete('/:taskId')
    @UseGuards(AuthGuard())
    async deleteTaskById(@Param('taskId') taskId: string) {
        return await this.taskService.deleteTaskById(taskId);
    }
}