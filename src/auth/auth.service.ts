import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto, SignUpDto } from './dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ) { }

    async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {

        //taking data
        const { name, email, password } = signUpDto

        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password, salt)
        //saving data with hashed password
        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        })

        //assigning jwt token by passing user id  that we get from mongodb
        const token = this.jwtService.sign({ id: user._id })

        return { token }
    }

    async login(loginDto: LoginDto): Promise<{token: string}>{
        const {email,password} = loginDto

        const user = await this.userModel.findOne({email})

        if(!user){
            throw new UnauthorizedException('Invalid email or password')
        }

        const isPasswordMatched = await bcrypt.compare(password,user.password)

        if(!isPasswordMatched){
            throw new UnauthorizedException('Invalid email or password')
        }
        
        const token = this.jwtService.sign({ id: user._id })

        return { token }
    }
}
