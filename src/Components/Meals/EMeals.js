import React from 'react'
import classes from './EMeals.module.css';
import AddForm from '../AddForm/AddForm';
import CartContext from '../Store/CartContext/CartContext';
import { useContext } from 'react';
const EMeals = (props) => {

    const CartCtx = useContext(CartContext);
    const price =  `$${props.price}`;

    const addRefItems =(amount) =>{

        CartCtx.addItems({
            id: props.id,
            amount: amount,
            image: props.image,
            name: props.name,
            description: props.description,
            price: props.price,
        });
    }
  return (
    
        <div className={classes.cardStyle}>
           <div className={classes.img}>
                <img src= {props.image} alt='f'/>
           </div>

            <div className={classes.nameBox}>
                <h4>{props.name}</h4>
            </div>

            <div className={classes.desc}>
                <p>{props.description}</p>
            </div>



            <div className={classes.priceForm}>
                <h3>{price}</h3>
                <AddForm addRefItems={addRefItems} />
            </div>
        </div>
  )
}

export default EMeals