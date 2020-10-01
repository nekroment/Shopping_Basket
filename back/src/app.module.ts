import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartModule } from './cart/cart.module';
require('dotenv/config');

const connectionString = 'mongodb+srv://moonlight:382001@cluster0.zkmbj.mongodb.net/cart_shipping?retryWrites=true&w=majority';

@Module({
  imports: [MongooseModule.forRoot(connectionString), CartModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
