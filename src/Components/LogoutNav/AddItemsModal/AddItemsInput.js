import React from 'react'
import AddItemsModal from './AddItemsModal.js';
import { useRef, useContext } from 'react';
import CartContext from '../../Store/CartContext/CartContext.js';
import classes from './AdditemsInput.module.css';
const AddItemsInput = (props) => {
    const cartCtx = useContext(CartContext);

    const NameRef = useRef('');
    const DecRef = useRef('');
    const PriceRef = useRef('');
    const ImgRef = useRef('');


    const onSubmitForm =(e) =>{
        e.preventDefault();
        const name = NameRef.current.value;
        const Dec = DecRef.current.value;
        const Price = PriceRef.current.value;
        const Img = ImgRef.current.value;

        if(name !=='' && Dec !=='' && Price !==''){
            const AllInputRefs = {
                name: name,
                description: Dec,
                price: Price,
                image: Img,
                id: Math.random().toString(),
            };
            props.AddItemsValues(AllInputRefs);

            cartCtx.setShowAdditemsCard(false);
        }else{
            return
        }
    }

  return (
    <AddItemsModal removeOverlay={props.removeOverlay}>
        <form onSubmit={onSubmitForm}>
            <div className={classes.formInputs}>
                <div className={classes.name}>
                    <label>Name of Item</label>
                    <input ref={NameRef} type="text"/>
                </div>
                <div className={classes.dec}>
                    <label>Description of Item</label>
                    <textarea  ref={DecRef} type="message"/>
                </div>
                <div className={classes.price}>
                    <label>Price of item</label>
                    <input ref={PriceRef} type="number"/>
                </div>
                <div className={classes.image}>
                    <label>Image of Item</label>
                    <input ref={ImgRef} type="file"/>
                </div>

                <button>AddItem to Existing Items</button>
            </div>
        </form>
    </AddItemsModal>
  )
}

export default AddItemsInput


/*
        name={item.name} 
        id={item.id}
        description={item.description} 
        price={item.price} 
        image={item.image}
*/