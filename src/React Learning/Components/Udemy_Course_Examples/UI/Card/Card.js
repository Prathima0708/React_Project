import React from 'react';

import classes from './Card.module.css';  //when using css modules need to import classes

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>
    {props.children}
    </div>;  //`` -template literal / props.           children-all the contents wrapped between card comp  / classes.card-card classname defined in css file 
};

export default Card;