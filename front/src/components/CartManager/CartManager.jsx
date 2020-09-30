import React from 'react';

const CartManager = (props) => {

  const createCarts = () => {
    return props.items.map(item => <Cart item={item} deleteItem={props.deleteItem} changeItem={rpops.changeItem}/>)
  }

  const carts = createCarts()
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
