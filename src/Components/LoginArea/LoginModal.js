import React from 'react'
import classes from './Login.module.css';
import ReactDom from 'react-dom';
const LoginModal = (props) => {
    const Overlay = () =>{
        return <div onClick={props.clickOverLogin} className={classes.Overlay}></div>
    }
    const Backdrop = (props) =>{
        return <div className={classes.Backdrop}>
            <div className={classes.header}>
                <header>{props.headerMsg}</header>
            </div>

            <div className={classes.message}>
                <p>{props.bodyMsg}</p>
            </div>

            <div className={classes.button}>
                <button onClick={props.clickOk}>OK</button>
            </div>
        </div>
    }
  return (
    <div>
        {ReactDom.createPortal(<Overlay />, document.getElementById('Overlay&Backdrop2'))}
        {ReactDom.createPortal(<Backdrop clickOk={props.clickOk} headerMsg={props.headerMsg} bodyMsg={props.bodyMsg}/>, document.getElementById('Overlay&Backdrop2'))}
    </div>
  )
}

export default LoginModal