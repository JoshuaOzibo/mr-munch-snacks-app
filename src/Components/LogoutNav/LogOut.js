import React from 'react'
import Icon from '../Icon/Icon';
import classes from './Logout.module.css';
import { useContext, useState } from 'react';
import CartContext from '../Store/CartContext/CartContext';
import { FiMenu } from 'react-icons/fi';
const LogOut = (props) => {
    const [showSideMenu, setShowSideMenu] = useState(false);

    const clickedSideMenu =() =>{
        setShowSideMenu(!showSideMenu);
    }

    const cartCtx = useContext(CartContext);

    const badgeNum = cartCtx.items.reduce((currentNum, item) =>{
        return currentNum + item.amount;
    }, 0)
  return (
        <div className={classes.NavItems}>
            <div className={classes.rightNav}>

                <div className={classes.addItems}>
                    <button onClick={props.clickedAdditems}>AddItems</button>
                </div>

                <div className={classes.mergeBadge}>
                    <div className={classes.badge}>
                        <p>{badgeNum}</p>
                    </div>
                    <div onClick={props.clickCart} className={classes.icon}>
                        <Icon />
                    </div>
                </div>

                <div className={classes.logout}>
                    <button onClick={props.clickedLogout}>Logout</button>
                </div>
            </div>

            <span className={classes.menuBtn} onClick={clickedSideMenu}>
                <a href='##'><FiMenu size={35} /></a>
            </span>

            <span className={showSideMenu ? `${classes.sideMenu1}` : `${classes.sideMenuLeft}`}>
                <div className={classes.sideMenu2}>
                    <div className={classes.addItems}>
                        <button onClick={props.clickedAdditems}>AddItems</button>
                    </div>

                    <div className={classes.mergeBadge}>
                        <div className={classes.badge}>
                            <p>{badgeNum}</p>
                        </div>
                        <div onClick={props.clickCart} className={classes.icon}>
                            <Icon />
                        </div>
                    </div>

                    <div className={classes.logout}>
                        <button onClick={props.clickedLogout}>Logout</button>
                    </div>
                </div>
            </span>
        </div>
  )
}

export default LogOut