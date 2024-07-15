import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    //readonly is used to make the property immutable/unchangeable
    readonly name: string;

    @IsNotEmpty()
    @IsEmail({},{message: '😕 Email is invalid, please enter a valid email'})
    readonly email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6, { message: '🤐 Password must be at least 6 characters long' })
    readonly password: string;
}