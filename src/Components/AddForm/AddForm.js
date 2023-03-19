import React from 'react';
import classes from './AddForm.module.css';
import { useRef } from 'react';
const AddForm = (props) => {

    const refItems = useRef();

    const submitRefItems =(e) =>{
        e.preventDefault()

        const refNumber = refItems.current.value;
        const convRefNum = +refNumber;

        props.addRefItems(convRefNum);
    }

  return (
        <form onSubmit={submitRefItems}>
            <div className={classes.input}>
                <input 
                type="number"
                min='1'
                ref={refItems}
                max='5'
                step='1'
                defaultValue='1'
                 />
            </div>

            <div className={classes.btn}>
                <button>Add</button>
            </div>
        </form>
  )
}

export default AddForm