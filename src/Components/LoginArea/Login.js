
import React from 'react';
import { useRef } from 'react';
import classes from './Login.module.css';
import LoginModal from './LoginModal';
const Login = (props) => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const submitedLogin =(e) =>{
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const inputValue = {
            email: email,
            password: password,
        }
        
        props.inputItems(inputValue)
    }

  return (
    <form onSubmit={submitedLogin}>
        { props.loginError && <LoginModal 
        clickOverLogin={props.clickOverLogin}
        clickOk={props.clickOk} 
        headerMsg={props.headerMsg} 
        bodyMsg={props.bodyMsg} 
        />}

        <div className={classes.loginBox}>
            
            <div className={classes.loginBoxCenter}>

                <div className={`${props.styledItem ? classes.errorMsgFocus : classes.emailInput}`}>
                    <div className={classes.emailInput}>
                        <label htmlFor='email'>Email:</label>
                        <input ref={emailRef} type="email" />
                    </div>

                    <div className={classes.passwordInput}>
                        <label htmlFor='password'>Password:</label>
                        <input ref={passwordRef} type="password" />
                    </div>
                </div>

                <div className={classes.btn}>
                    <button>Login</button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default Login