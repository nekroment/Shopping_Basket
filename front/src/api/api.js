import * as axios from 'axios';
import { changeBasketItemThunkCreator } from '../redux/reducer/basketReducer';

const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

export const basketAPI = {
  async getItems () {
    return await instance.get('/cart');
  },
  async changeItem (id, number) {
    return await instance.post('/cart/change', {id, number});
  },
  async deleteItem(id) {
    return await instance.delete(`/cart/delete/${id}`);
  },
  async deleteAll(id) {
    return await instance.delete(`/cart/delete/all`);
  }
};
