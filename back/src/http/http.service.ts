import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class QuotesService {
  constructor(private http: HttpService) {}

  async getItems() {
    return await this.http
      .get('https://fakestoreapi.com/products')
      .pipe(map(response => response.data));
  }
}
