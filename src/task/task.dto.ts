import { IsNotEmpty } from 'class-validator';

export class TaskDto {

    @IsNotEmpty()
    name: string;

    completed?: boolean;

    user?: string; 
}