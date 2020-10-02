import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import CartManager from './components/CartManager/CartManager.jsx';
import { setBasketItemsThunkCreator, deleteBasketItemThunkCreator, changeBasketItemThunkCreator} from './redux/reducer/basketReducer.js';
import Shipping from './components/Shipping/Shipping.jsx';

function App(props) {

  //Запрос на получение товаров
  function setBasket () {
    props.setBasket();
  }
  useEffect(() => {return setBasket()}, []);

  return (
    <div className="App">
      <Switch>
        <Route path='/cart' component={() => <CartManager isLoading={props.isLoading} focus={props.focus} changeItem={props.changeItem} cost={props.cost} items={props.items} deleteItem={props.deleteItem} />} />
        <Route path='/shipping' component={() => <Shipping delete={props.deleteItem} cost={props.cost}/>} />
        <Route path='/' component={() => <Redirect to='/cart'/>}/>
      </Switch>
    </div>
  );
}

//Подключение App к редаксу
const mapStateToProps = (state) => ({
  items: state.basket.items,
  cost: state.basket.cost,
  focus: state.basket.focus,
  isLoading: state.basket.isLoading
})

export default connect(mapStateToProps, {
  setBasket: setBasketItemsThunkCreator,
  deleteItem: deleteBasketItemThunkCreator,
  changeItem: changeBasketItemThunkCreator
})(App);
