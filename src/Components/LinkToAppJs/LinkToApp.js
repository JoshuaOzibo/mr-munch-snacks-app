import React from 'react';
import ReactMeal from '../ReactMeal/ReactMeal';
import LogOut from '../LogoutNav/LogOut';
import classes from './LinkToApp.module.css';
import Showcase from '../ShowcaseArea/Showcase';
import AboutFood from '../AboutOurFood/AboutFood';
import Meals from '../Meals/Meals';
import {useState,useEffect} from 'react';
import Login from '../LoginArea/Login';
import Cart from '../Cart/Cart';
import { useContext } from 'react';
import CartContext from '../Store/CartContext/CartContext';


const LinkToApp = (props) => {
    const [showHome, setShowHome] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    const cartCtx = useContext(CartContext);


    //form validations
    const inputItems = (e) =>{
        
        if(e.email === ''){
            setShowHome(false);
            setShowErrorMsg({
                headerMsg : 'Sorry Something Went Wrong!!!',
                bodyMsg: 'Please fill the email Input',
            })
            
        }else if(e.password === '' || e.password.length < 5  ){
            setShowHome(false);
            setShowErrorMsg({
                headerMsg: 'Sorry Something Went Wrong!!!',
                bodyMsg: 'Please fill the password Input and character must be greater than 5',
            })
        }else{
            setShowHome(true)

            localStorage.setItem('ok', '1')
        }
    }

    useEffect(() =>{
        const getLocalInfo = localStorage.getItem('ok')
        if(getLocalInfo === '1'){
            setShowHome(true);
        }
    }, [])

    const clickOk =() =>{
        setShowErrorMsg(false)
    }
    const clickOverLogin =() =>{
        setShowErrorMsg(false)
    }

    const clickedLogout =() =>{
        localStorage.removeItem('ok');
        setShowHome(false)
    }

    //inputFocus
    const styledItem = showErrorMsg ;

    //showCart and CloseCart
    const clickCart =() =>{
        setShowCart(true)
    }
    const clickClose=() =>{
        setShowCart(false)
    }

    const ClickedOverlay =() =>{
        setShowCart(false)
    }

    //AddItems to cartHandler
    const clickedAdditems =() =>{
        cartCtx.setShowAdditemsCard(true);
    }
  return (
    <div>
        {showCart && <Cart ClickedOverlay={ClickedOverlay} clickClose={clickClose} />}
        <div className={classes.navBar}>
            <div className={classes.navBarCenter}>
                <div>
                    <ReactMeal />
                </div>

                <div className={classes.navRight}>
                    {showHome && <LogOut clickedAdditems={clickedAdditems} clickCart={clickCart} clickedLogout={clickedLogout} />}
                </div>
            </div>
        </div>
        {!showHome && <Login 
            styledItem={styledItem} 
            clickOverLogin={clickOverLogin} 
            clickOk={clickOk} 
            headerMsg={showErrorMsg.headerMsg} 
            bodyMsg={showErrorMsg.bodyMsg} 
            loginError={showErrorMsg} 
            inputItems={inputItems} 
        />}

        {showHome &&<div>
            <Showcase />
            <AboutFood />
            <Meals />
        </div>}
    </div>
  )
}

export default LinkToApp