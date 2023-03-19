import React from 'react'
import classes from './CartItems.module.css'
const CartItems = (props) => {
  const price = `price: $${props.price}`;
  
  return (
    <div className={classes.centerCart}>
      <div className={classes.cardBox}>
        <div className={classes.imagesBox}>
          <img src={props.image} alt="pictures" />
        </div>

        <div className={classes.namePrice}>
          <h3>{props.name}</h3>
          <h4>{price}</h4>
          <div className={classes.flexMatch}>
            <p>{props.description}</p>
            <button>{`X${props.amount}`}</button>
          </div>
        </div>


        <div className={classes.buttons}>
          <button onClick={props.clickAddbtn}>+</button>
          <button onClick={props.clickRemoveItems}>-</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems