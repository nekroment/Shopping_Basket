import React from 'react';
import Cart from '../Cart/Cart.jsx';

const CartManager = (props) => {

  const createCarts = () => {
    return props.items.map(item => <Cart focus={props.focus} key={item.id} item={item} deleteItem={props.deleteItem} changeItem={props.changeItem}/>)
  }
  const carts = createCarts();
  return (
    <>
    <div>
    {carts}

    </div>
    <div>
      {props.cost}
      <button>BUY</button>
    </div>
    </>
  )
};

export default CartManager;
