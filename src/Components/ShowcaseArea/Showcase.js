import React from 'react'
import classes from './Showcase.module.css';
import IMG from '../assets/pexels-emre-vonal-7741798.jpg';
const Showcase = () => {
  return (
    <div className={classes.showcase}>
        <div className={classes.showcaseText}>
            <div className={classes.showCenter}>
                <h1>Wake Up Early, Eat Fresh & Healthy</h1>
                <p> Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit.
                    Optio, sed. Impedit tempora 
                    atque sit voluptatibus blanditiis, 
                    perferendis temporibus assumenda 
                    enim.
                </p>
            </div>
        </div>
        <img src={IMG} alt=" this is a nice imag"/>
    </div>
  )
}

export default Showcase;