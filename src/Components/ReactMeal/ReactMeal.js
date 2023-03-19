import React from 'react';
import Logo from '../assets/png-clipart-chef-chef-cartoon-characters-removebg-preview.png';
import classes from './ReactMeal.module.css';
const ReactMeal = () => {
  return (
    <div className={classes.reactMeal}>
      <img src={Logo} alt='goodimg' />
        <h2>Mr. Munch</h2>
    </div>
  )
}

export default ReactMeal