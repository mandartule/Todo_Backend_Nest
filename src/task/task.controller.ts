import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('task')
export class TaskController {

    @Get()
    @UseGuards(AuthGuard())
    getTasks() {
        return 'All tasks'
    }
}
