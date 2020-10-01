import { User } from './../schema/User';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async setUser(user: User) {
        let newUser = new this.userModel(user);
        return await newUser.save();
    }
}
