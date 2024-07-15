import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

//schema class
@Schema({
    timestamps: true,
})
export class user{

    @Prop()
    name: string;

    //if we want to make email unique we can use unique: true
    @Prop({unique : [true,'Email already exists']})
    email: string;

    @Prop()
    password: string;
}

//schema factory to create schema form class
export const UserSchema = SchemaFactory.createForClass(user);
