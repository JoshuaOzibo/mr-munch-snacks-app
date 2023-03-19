import React from 'react'
import EMeals from './EMeals';
import classes from '../Meals/Meals.module.css';
import AddItemsInput from '../LogoutNav/AddItemsModal/AddItemsInput';

import Image1 from '../../Images2/pexels-horizon-content-3738730.jpg';
import Image2 from '../../Images2/pexels-jonathan-borba-2983101.jpg';
import Image3 from '../../Images2/pexels-jonathan-borba-2983102.jpg';
import { useState, useContext } from 'react';
import CartContext from '../Store/CartContext/CartContext';

const DummyMeals = [
    {
        id: 'm1',
        name: 'Fresh And Healthy Salad',
        description: 'Lorem ipsum dolor sit adipisicing. Ducimus, nemo.',
        price: 23.56,
        image: `${Image1}`,
    },
    {
        id: 'm2',
        name: 'Cashewnut Chicken Salad',
        description: 'Lorem ipsum dolor sit adipisicing. Ducimus, nemo.',
        price: 23.38,
        image: `${Image2}`,
    },
    {
        id: 'm3',
        name: 'Sesame Dressing Salad',
        description: 'Lorem ipsum dolor sit adipisicing. Ducimus, nemo.',
        price: 23.16,
        image: `${Image3}`,
    },
]
const Meals = (props) => {

    const [NewDummyItems, setNewDummyItems] = useState(DummyMeals);

    const AddItemsValues =(AddItemsValues) =>{
        setNewDummyItems((previousItems) =>{
            return[...previousItems, AddItemsValues];
        })
    }

    const cartCtx = useContext(CartContext);

    const removeOverlay =() =>{
       cartCtx.setShowAdditemsCard(false)
    }

    const getDummyMeals = <ul> {NewDummyItems.map((item) =><li key={item.id}>{<EMeals
        name={item.name} 
        id={item.id}
        description={item.description} 
        price={item.price} 
        image={item.image} 
        />}</li>)}
        </ul>

  return (
    <div className={classes.box}>
        {getDummyMeals}
        {cartCtx.showAdditemsCard && <AddItemsInput removeOverlay={removeOverlay}  AddItemsValues={AddItemsValues} />}
    </div>
  )
}

export default Meals