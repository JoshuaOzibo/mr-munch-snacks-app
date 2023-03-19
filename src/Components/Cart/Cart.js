import React from 'react'
import Modal from '../Modal/Modal';
import CartItems1 from './CartItems';
import classes from './Cart.module.css';
import CartContext from '../Store/CartContext/CartContext';
import { useContext } from 'react';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  const addItemHandler =(item) =>{
    cartCtx.addItems({...item, amount: 1});
  }

  const removeItemHandler =(id) =>{
    cartCtx.removeItems(id);
  }

  const CartItemsAdd = <div>{cartCtx.items.map((item) => <li key={item.id}>{<CartItems1
    image={item.image}
    price={item.price}
    amount={item.amount}
    name={item.name}
    description={item.description}
    clickAddbtn={addItemHandler.bind(null, item)}
    clickRemoveItems={removeItemHandler.bind(null, item.id)}
    />
    }</li>)}</div>

const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

const showCanclebtn = cartCtx.items.length > 0 ;

const disabledbtn =cartCtx.items.length > 0 ;

  return (
    <Modal ClickedOverlay={props.ClickedOverlay}>
        <div className={classes.cartBlock}>
          <div className={classes.cartItemsBlock}>
              {CartItemsAdd}
          </div>


          <div className={classes.totalMax}>

            {/*order cartbutton display*/}
            
            
            <div className={classes.totalAmount}>
              <div className={classes.totalCenter}>
                <h3>TotalAmount</h3>
                <h3>{totalAmount}</h3>
              </div>
            </div>


            <div className={classes.candleOrderBtn}>
              <div className={classes.candleOrderBtnCenter}>
                {showCanclebtn && <button 
                style={{color: `${!disabledbtn? 'red' : 'green'}`}} 
                onClick={props.clickClose}>Cancel
                </button>}
                <button 
                  style={{color: `${!disabledbtn? '' : 'green'}`}} 
                  disabled={!disabledbtn ? 'disabled' : ''}
                  >{!disabledbtn ? 'Disabled' : 'Order'}
                  </button>
              </div>
            </div>
          </div>
        </div>
    </Modal>
  )
}

export default Cart