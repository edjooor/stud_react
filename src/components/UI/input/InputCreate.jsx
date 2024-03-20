import React from 'react';
import classes from './InputCreate.module.css';

const InputCreate = React.forwardRef((props, ref) => {
    return(
        <input ref={ref} className={classes.inpt} {...props} type='text' />

    );
});
export default InputCreate;