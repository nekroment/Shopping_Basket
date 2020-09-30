

const SET_BASKET_ITEMS = 'SET_BASKET_ITEMS';
const SET_COST = 'SET_COST';

let initialState = {
  items: [],
  cost: 0
}

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASKET_ITEMS: {
      let stateCopy = {...state};
      stateCopy.items = [...action.items];
      return stateCopy;
    }
    case SET_COST: {
      let newCost = 0;
      for (let i = 0; i < state.items.length; i++) {
        newCost += Number(state.items[i].number);
      }
      return {...state, cost: newCost};
    }
    default: return state;
  }
}

export const setCost = () => ({type: SET_COST});
export const setBasketItems = (items) => ({type: SET_BASKET_ITEMS, items});

export const setBasketItemsThunkCreator = () => {
  return async (dispatch) => {
    try {
      let responce = await basketAPI.getBasket();

      let basketItems = await basketAPI.createBasket(responce.data);
      dispatch(setBasketItems(basketItems.data));
      dispatch(setCost());
    } catch (error) {

    }
  }
};

export const deleteBasketItemThunkCreator = (id) => {
  return async (dispatch) => {
    try {
      let responce = await basketAPI.deleteItem(id);
      dispatch(setBasketItemsThunkCreator());
    } catch (error) {

    }
  }
};

export const changeBasketItemThunkCreator = (id, number) => {
  return async (dispatch) => {
    try {
      if(number < 50 && number => 0) {
        let responce = await basketAPI.changeItem(id, number);
        dispatch(setBasketItemsThunkCreator());
      }
    } catch (error) {

    }
  }
}

export default basketReducer;
