import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = (props) => {

  const ref = React.createRef();

  useEffect(() => {
    if (ref && props.focus == props.item.id) {
      ref.current.focus()
    }
  })

  const changePlus = (event, number) => {
    event.preventDefault();
    const plus = Number(props.item.number) + number;
    props.changeItem(props.item.id, plus, 'plus');
    ref.current.focus()
  }

  const change = (event) => {
    event.preventDefault();
    props.changeItem(props.item.id, event.target.value);
  }
  const deleteCart = () => {
    props.deleteItem(props.item.id)
  }
  return (
    <>
      <div className={'cart'}>
        <div className={"item"}>
          <img src={props.item.image} />
          <div className={'description'}>
            <div>
              <p>{props.item.title}</p>
            </div>
            <div>
              <p>{props.item.description}</p>
            </div>
          </div>
        </div>
        <div className={"change"}>
          <div>
            <button onClick={() => props.deleteItem(props.item.id)}>delete</button>
          </div>
          <button onClick={(e) => changePlus(e, 1)}>+</button>
          <input className={'value'} tabindex="-1" name={props.item.title} id={props.item.id} ref={ref} onChange={(e) => change(e)} value={props.item.number} />
          <button onClick={(e) => changePlus(e, -1)}>-</button>
        </div>
        <hr />
      </div>
    </>
  )
}
export default Cart;
