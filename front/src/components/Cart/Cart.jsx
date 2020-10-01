import React, { useEffect, useState } from 'react';
import './Cart.css';
import trash from '../../img/trash.png';

const Cart = (props) => {

  const ref = React.createRef();

  const id = props.item.id;

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

  return (
    <>
      <div className={'cart'}>
        <div className={"block"}>
          <div className={"item"}>
            <img className={'item-img'} src={props.item.image} />
            <div className={'item-info'}>
              <div className={"title"}>
                <p>{props.item.title}</p>
              </div>
              <div className={"description"}>
                <p>{props.item.description}</p>
              </div>
            </div>
          </div>
          <div className={"change"}>
            <button className={"button"} onClick={(e) => changePlus(e, 1)}>+</button>
            <input className={'value'} tabindex="-1" name={props.item.title} id={props.item.id} ref={ref} onChange={(e) => change(e)} value={props.item.number} />
            <button className={"button"} onClick={(e) => changePlus(e, -1)}>-</button>
            <p className={"price"}>{props.item.price * props.item.number + ' ' + '€'}</p>
          </div>
          <div className={"delete"}>
            <button onClick={() => props.deleteItem('', id)}>
              <img src={trash} />
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}
export default Cart;
