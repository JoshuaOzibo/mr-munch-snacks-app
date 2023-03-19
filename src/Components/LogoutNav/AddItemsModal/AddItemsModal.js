import React from 'react'
import Classes from '../Logout.module.css';
import ReactDom from 'react-dom';
const LogOutModal = (props) => {
    const Overlay = () =>{
        return <div onClick={props.removeOverlay} className={Classes.Overlay}></div>
    }
    const Backdrop = (props) =>{
        return <div className={Classes.Backdrop}>
            <div>{props.children}</div>
        </div>
    }

    const getdocumentId = document.getElementById('Overlay&Backdrop');
  return (
    <div>
        {ReactDom.createPortal(<Overlay removeOverlay={props.removeOverlay} />, getdocumentId)}
        {ReactDom.createPortal(<Backdrop>{props.children}</Backdrop>, getdocumentId)}
    </div>
  )
}

export default LogOutModal