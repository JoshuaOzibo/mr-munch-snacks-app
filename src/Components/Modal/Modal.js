import React from 'react'
import classes from './Modal.module.css';
import ReactDom from 'react-dom';
const Modal = (props) => {
    const Overlay = () =>{
        return <div onClick={props.ClickedOverlay} className={classes.Overlay}></div>
    }
    const Backdrop = (props) =>{
        return <div className={classes.Backdrop}>
            <div>{props.children}</div>
        </div>
    }

    const getdocumentId = document.getElementById('Overlay&Backdrop');
  return (
    <div>
        {ReactDom.createPortal(<Overlay />, getdocumentId)}
        {ReactDom.createPortal(<Backdrop>{props.children}</Backdrop>, getdocumentId)}
    </div>
  )
}

export default Modal