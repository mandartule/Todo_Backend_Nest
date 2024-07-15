import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

export class LoginDto {
    
    @IsNotEmpty()
    @IsEmail({},{message: '🤔 Enter a valid email'})
    readonly email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string
}