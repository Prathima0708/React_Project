import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={classes.button}   //.button -classname defined in button.module.css file
      type={props.type || 'button'} //if props.type is undefined then button will be used as default
      onClick={props.onClick}   
    >
      {props.children}  
    </button>
  );
};

export default Button;