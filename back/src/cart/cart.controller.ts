import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Delete,
  Param,
  Get,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { Item } from 'src/schema/Item';
import { QuotesService } from 'src/http/http.service';

@Controller('cart')
export class CartController {
  constructor(
    private quotesService: QuotesService,
    private readonly cartServise: CartService,
  ) {}

  @Get()
  async getItems() {
    try {
      const isItem = await this.cartServise.findItems();
      if (isItem.length > 0) {
        return isItem;
      }
      const items = await this.quotesService.getItems();
      return await this.cartServise.setItems(items);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('/change')
  async changeItem(@Body() body: Item) {
    try {
      return await this.cartServise.changeItem(body.id, body.number);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('/delete/:id')
  async deleteItem(@Param() params: Item) {
    try {
      return await this.cartServise.deleteItem(params.id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('/delete/all')
  async deleteAll() {
      try {
          return await this.cartServise.deleteAll();
      } catch (error) {
        throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: error,
            },
            HttpStatus.BAD_REQUEST,
          );
      }
  }
}
