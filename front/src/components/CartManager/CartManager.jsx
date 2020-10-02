import React from 'react';
import Cart from '../Cart/Cart.jsx';
import { NavLink } from 'react-router-dom';
import './CartManager.css';
import CartLoading from './CartLoading.jsx';

const CartManager = (props) => {

  const createCarts = () => {
    return props.items.map(item => <Cart focus={props.focus} key={item.id} item={item} deleteItem={props.deleteItem} changeItem={props.changeItem} />)
  }
  const carts = createCarts();

  if (props.isLoading) {
    return <CartLoading />
  }

  return (
    <>
      <div>
        {carts}
      </div>
      <div className={'buy'}>
        <p className={"price-button"}>{props.cost
          + ' '
          + '€'}</p>
        <NavLink to='/shipping'><button className={'buy-button'}>BUY</button></NavLink>
      </div>
    </>
  )
};

export default CartManager;
