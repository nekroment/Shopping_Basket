import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';
require('dotenv/config');

const connectionString = `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0.zkmbj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

@Module({
  imports: [MongooseModule.forRoot(connectionString), CartModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
