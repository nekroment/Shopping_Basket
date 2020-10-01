import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import CartManager from './components/CartManager/CartManager.jsx';
import { setBasketItemsThunkCreator, deleteBasketItemThunkCreator, changeBasketItemThunkCreator, changeBasketItemPlusThunkCreator } from './redux/reducer/basketReducer.js';

function App(props) {

  useEffect(() => props.setBasket(), []);
  return (
    <div className="App">
      <Switch>
        <Route path='/cart' component={() => <CartManager focus={props.focus} changeItem={props.changeItem} cost={props.cost} items={props.items} deleteItem={props.deleteItem} />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.basket.items,
  cost: state.basket.cost,
  focus: state.basket.focus
})

export default connect(mapStateToProps, {
  setBasket: setBasketItemsThunkCreator,
  deleteItem: deleteBasketItemThunkCreator,
  changeItem: changeBasketItemThunkCreator,
})(App);
