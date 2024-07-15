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
    @MinLength(6)
    readonly password: string
}