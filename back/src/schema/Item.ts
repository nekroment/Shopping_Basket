import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Item extends Document {
    @Prop()
    id: string;

    @Prop()
    image: string;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    price: string;

    @Prop()
    number: string;

}

export const ItemSchema = SchemaFactory.createForClass(Item);