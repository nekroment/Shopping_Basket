import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import CartManager from './components/CartManager/CartManager.jsx';
import { setBasketItemsThunkCreator, deleteBasketItemThunkCreator, changeBasketItemThunkCreator, changeBasketItemPlusThunkCreator } from './redux/reducer/basketReducer.js';
import Shipping from './components/Shipping/Shipping.jsx';

function App(props) {

  useEffect(() => props.setBasket(), []);
  return (
    <div className="App">
      <Switch>
        <Route path='/cart' component={() => <CartManager focus={props.focus} changeItem={props.changeItem} cost={props.cost} items={props.items} deleteItem={props.deleteItem} />} />
        <Route path='/shipping' component={() => <Shipping delete={props.deleteItem} cost={props.cost}/>} />
        <Route path='/' component={() => <Redirect to='/cart'/>}/>
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
  changeItem: changeBasketItemThunkCreator
})(App);
