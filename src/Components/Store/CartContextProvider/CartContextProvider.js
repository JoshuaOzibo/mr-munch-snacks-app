import React from 'react'
import CartContext from '../CartContext/CartContext';
import { useReducer, useState } from 'react';

const defaultCart ={
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const updateAmount = state.totalAmount + action.item.price * action.item.amount;


        const findIndexOfItems = state.items.findIndex(item => item.id === action.item.id);
        const inverseOfItems = state.items[findIndexOfItems];

        let updateNewitem;
        if(inverseOfItems){
            const update2t ={
                ...inverseOfItems,
                amount: inverseOfItems.amount + action.item.amount,
            };
            updateNewitem=[...state.items];
            updateNewitem[findIndexOfItems] = update2t;
        }else{
            updateNewitem = state.items.concat(action.item);
        }
        return {
            items: updateNewitem,
            totalAmount: updateAmount,
        };
    }


    if(action.type === 'REMOVE'){
        const findIndexOfItems = state.items.findIndex(item =>item.id === action.id);
        const indexOfItems = state.items[findIndexOfItems];
        const totalAmount2 = state.totalAmount - indexOfItems.price;

        let update1;
        if(indexOfItems.amount === 1 ){
            update1 = state.items.filter((item) =>item.id !== action.id);
        }else{
            const removeAmount = {...indexOfItems, amount: indexOfItems.amount - 1};
            update1 = [...state.items];
            update1[findIndexOfItems] = removeAmount;
        }
        return{
            items: update1,
            totalAmount: totalAmount2,
        };
    }
    return defaultCart;


}


const CartContextProvider = (props) => {
    const [cartItemsReduce, dispatchedItem] = useReducer(cartReducer, defaultCart);
    const [showAdditemsCard, setShowAdditemsCard] = useState(false);

    const addItemsHandler = (item) =>{
        dispatchedItem({type: 'ADD', item: item})
    }
    const removeitemHandler =(id) =>{
        dispatchedItem({type: 'REMOVE', id: id})
    }


    const cartItem ={
        items: cartItemsReduce.items,
        totalAmount: cartItemsReduce.totalAmount,
        addItems: addItemsHandler,
        removeItems: removeitemHandler,
        showAdditemsCard: showAdditemsCard,
        setShowAdditemsCard: setShowAdditemsCard,
    }

  return (
    <CartContext.Provider value={cartItem}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;