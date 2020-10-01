import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    phone: string;

    @Prop()
    email: string;

    @Prop()
    options: string;

    @Prop()
    price: string;
}

export const UserSchema = SchemaFactory.createForClass(User);