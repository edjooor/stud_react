import React from 'react';
import classes from './MainButton.module.css'

const MainButton = ({children, ...props}) => {
    return(
        <button {...props} className={classes.btn}>
            {children}
        </button>
    );
};
export default MainButton;