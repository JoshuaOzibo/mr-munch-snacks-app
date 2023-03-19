import React from 'react'
import classes from './AboutFood.module.css';
const AboutFood = () => {
  return (
    <div className={classes.Delicious}>
            <div className={classes.DeliciousCemter}>
                <h2>Delicious Food,Delivered To You</h2>
                <p>
                    Choose your favorite meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients, just-in-time and
                    of course by experienced chefs!
                </p>
            </div>
    </div>
  )
}

export default AboutFood