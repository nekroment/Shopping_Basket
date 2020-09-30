import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

function App(props) {

  useEffect(() => props.setBasket(), []);

  return (
    <div className="App">
      <Switch>
        <Route path='/cart' component={() => <CartManager cost={props.cost} items={props.items} deleteItem={props.deleteItem} changeItem={props.changeItem}/>} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.basket.items,
  cost: state.basket.cost
})

export default connect(mapStateToProps, {
  setBasket: setBasketItemsThunkCreator,
  deleteItem: deleteBasketItemThunkCreator,
  changeItem: changeBasketItemThunkCreator
})(App);
