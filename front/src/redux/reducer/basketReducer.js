import { basketAPI, userAPI } from '../../api/api.js';

const SET_BASKET_ITEMS = 'SET_BASKET_ITEMS';
const SET_COST = 'SET_COST';
const CHANGE_CART = 'CHANGE_CART';
const IS_LOADING = 'IS_LOADING'

//Начальное значение состояния
let initialState = {
  items: [],
  cost: 0,
  focus: undefined,
  isLoading: true
}

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASKET_ITEMS: {
      let stateCopy = { ...state };
      stateCopy.items = [...action.items];
      return stateCopy;
    }
    case SET_COST: {
      let newCost = 0;
      for (let i = 0; i < state.items.length; i++) {
        newCost += state.items[i].number * Number(state.items[i].price);
      }
      return { ...state, cost: +newCost.toFixed(2) };
    }
    case CHANGE_CART: {
      let stateCopy = { ...state };
      stateCopy.items = [...state.items];
      if (action.isBt === 'plus') {
        stateCopy.focus = undefined;
      } else {
        stateCopy.focus = action.id;
      }
      return stateCopy;
    }
    case IS_LOADING: {
      let stateCopy = {...state};
      stateCopy.isLoading = action.isLoading;
      return stateCopy;
    }
    default: return state;
  }
}

//Action creators
export const setIsLoading = (isLoading) => ({type: IS_LOADING, isLoading}); 
export const changeCart = (id, isBt) => ({ type: CHANGE_CART, id, isBt });
export const setCost = () => ({ type: SET_COST });
export const setBasketItems = (items) => ({ type: SET_BASKET_ITEMS, items });

//Запрос на получение товаров
export const setBasketItemsThunkCreator = () => {
  return async (dispatch) => {
    try {
      let responce = await basketAPI.getItems();
      dispatch(setBasketItems(responce.data));
      dispatch(setCost());
      dispatch(setIsLoading(false));
    } catch (error) {

    }
  }
};

//Запрос на удаление товара
export const deleteBasketItemThunkCreator = (user = undefined, id = undefined) => {
  return async (dispatch) => {
    try {
      if (id === undefined) {
        await basketAPI.deleteAll();
        await userAPI.setUser(user);
        dispatch(setBasketItemsThunkCreator());
      } else {
        await basketAPI.deleteItem(id);
        dispatch(setBasketItemsThunkCreator());
      }
    } catch (error) {
    }
  }
};

//Запрос на изменение товара
export const changeBasketItemThunkCreator = (id, number, isBt = '') => {
  return async (dispatch) => {
    try {
      if (number <= 50 && number >= 0) {
        await basketAPI.changeItem(id, number);
        dispatch(setBasketItemsThunkCreator());
        dispatch(changeCart(id, isBt))
      }
    } catch (error) {

    }
  }
}

export default basketReducer;
