import { basketAPI } from '../../api/api.js';

const SET_BASKET_ITEMS = 'SET_BASKET_ITEMS';
const SET_COST = 'SET_COST';
const CHANGE_CART = 'CHANGE_CART';
const DELETE_CART = 'DELETE_CART';

let initialState = {
  items: [],
  cost: 0,
  focus: undefined
}

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASKET_ITEMS: {
      let stateCopy = { ...state };
      stateCopy.isCart = true;
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
      for (let i = 0; i < stateCopy.items.length; i++) {
        if (stateCopy.items[i].id === action.id) {
          stateCopy.items[i].number = action.number;
        }
      }
      return stateCopy;
    }
    case DELETE_CART: {
      let stateCopy = { ...state };
      stateCopy.items = [...state.items];
      stateCopy.items = stateCopy.items.filter((item) => item.id != action.id);
      return stateCopy;
    }
    default: return state;
  }
}

export const deleteCart = (id) => ({ type: DELETE_CART, id });
export const changeCart = (id, number, isBt) => ({ type: CHANGE_CART, id, number, isBt });
export const setCost = () => ({ type: SET_COST });
export const setBasketItems = (items) => ({ type: SET_BASKET_ITEMS, items });

export const setBasketItemsThunkCreator = () => {
  return async (dispatch) => {
    try {
        let responce = await basketAPI.getBasket();
        let cart = responce.data.map(element => {
          element.number = 1;
          return element;
        });
        dispatch(setBasketItems(cart));
        dispatch(setCost());

      //let basketItems = await basketAPI.createBasket(responce.data);
      //dispatch(setBasketItems(basketItems.data));
    } catch (error) {

    }
  }
};

export const deleteBasketItemThunkCreator = (id) => {
  return async (dispatch) => {
    try {
      //let responce = await basketAPI.deleteItem(id);
      //dispatch(setBasketItemsThunkCreator());
      dispatch(deleteCart(id));
      dispatch(setCost());
    } catch (error) {

    }
  }
};

export const changeBasketItemThunkCreator = (id, number, isBt = '') => {
  return async (dispatch) => {
    try {
      if (number <= 50 && number >= 0) {
        //let responce = await basketAPI.changeItem(id, number);
        //dispatch(setBasketItemsThunkCreator());
        dispatch(changeCart(id, number, isBt));
        dispatch(setCost());
      }
    } catch (error) {

    }
  }
}

export default basketReducer;
