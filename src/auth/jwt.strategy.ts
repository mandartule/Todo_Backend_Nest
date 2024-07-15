import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from "./schemas/user.schema";


@Injectable()             //class extends PassportStrategy class
export class JwtStrategy extends PassportStrategy(Strategy) {

    //injecting the user model so JwtStrategy can interact with the UserCollection
    constructor( @InjectModel(User.name) private userModel: Model<User>) {

        //calling the parent class constructor so we use Super keyword
        //parent class is PassportStrategy as we externded our class

        super({

            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        })
    }

    //this pay load was inserted by us in token in auth.service.ts
    async validate(payload) {

        const { id } = payload;

        //if the id is of user
        const user = await this.userModel.findById(id);

        //if user is not found
        if (!user) {
            throw new UnauthorizedException('Login first to access this Page')
        }

        return user;
    }
}