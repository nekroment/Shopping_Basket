import React from 'react';

const Cart = (props) => {

  const change = (number) => {
    props.changeItem(props.item.id, number);
  }

  const delete = () => {
    props.deleteItem(props.item.id)
  }

  return(
    <div>
      <div className={"item"}>
        <img src=`${props.img}` />
        <div>
          <p>{props.item.title}</p>
        </div>
        <div>
          <p>{props.item.description}</p>
        </div>
      </div>
      <div>
        <button onClick={delete}>delete</button>
      </div>
      <form>
        <button onClick={() => change(1)}>+</button>
        <input />
        <button onClick={() => change(1)}>-</button>
      </form>
      <hr/>
    </div>
  )
}

export default Cart;
