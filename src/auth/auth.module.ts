import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
@Module({
    imports: [

        //importing passport module and registering the default strategy
        PassportModule.register({ defaultStrategy: 'jwt' }),

        //importing jwt module and registering the module

        //we are using registerAsync method beacuse we also need to pass config varibles inside it
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    secret: config.get<string>('JWT_SECRET'),
                    signOptions: {
                        expiresIn: config.get<string | number>('JWT_EXPIRES'),
                    },
                };
            },
        }),

        //importing mongoose module and passing the schema
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    controllers: [AuthController],
    providers: [AuthService,JwtStrategy],

    //exporting the JWT strategy and PassportModule so we can validate our routes using it
    exports: [JwtStrategy,PassportModule]
})
export class AuthModule { }
