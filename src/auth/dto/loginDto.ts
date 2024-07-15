import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

export class LoginDto {
    
    @IsNotEmpty()
    @IsEmail({},{message: '🤔 Enter a valid email'})
    readonly email: string

    @IsNotEmpty({message: '🤐 Password is required'})
    @IsString()
    readonly password: string
}