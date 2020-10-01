import { Item } from 'src/schema/Item';
import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Axios from 'axios';

@Injectable()
export class CartService {
    constructor( @InjectModel(Item.name) private itemModel: Model<Item>) {}

    async setItems(items) {
        let newItems;
        for (let i = 0; i < items.length; i++) {
            newItems = new this.itemModel({
                id: items[i].id,
                image: items[i].image,
                title: items[i].title,
                description: items[i].description,
                price: items[i].price,
                number: 1
            });
            await newItems.save();
        }
        return await this.findItems();
    }

    async findItems() {
        return await this.itemModel.find();
    }

    async changeItem(id: string, number: string) {
        return await this.itemModel.updateOne({id: id}, {number: number});
    }

    async deleteItem(id: string) {
        return await this.itemModel.remove({id: id});
    }

    async deleteAll() {
        return await this.itemModel.deleteMany();
    }
    async axiosItem() {
        return await Axios.get('https://fakestoreapi.com/products');
    }
}
