import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

export const basketAPI = {
  async getBasket() {
    return await axios.get('https://fakestoreapi.com/products/10');
  },
  async createBasket(items) {
    return await instance.post('/basket/create', {items});
  },
  async changeItem(id, number) {
    return await instance.post('/basket/change', {id, number});
  },
  async deleteItem(id) {
    return await instance.delete(`/basket/${id}`)
  }
};
