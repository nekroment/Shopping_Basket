import { Module, HttpModule } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from 'src/schema/Item';
import { QuotesService } from 'src/http/http.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Item.name, schema: ItemSchema}]),  HttpModule],
  controllers: [CartController],
  providers: [CartService, QuotesService]
})
export class CartModule {}
