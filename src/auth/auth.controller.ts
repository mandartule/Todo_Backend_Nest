
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, SignUpDto } from './dto';


@Controller('auth')
export class AuthController {
    
    constructor(private authService: AuthService) { }

    @Post('signup')
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
        console.log(signUpDto)
        return this.authService.signUp(signUpDto)
    }

    @Post('login')
    login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
        console.log(loginDto)
        return this.authService.login(loginDto)
    }
}
