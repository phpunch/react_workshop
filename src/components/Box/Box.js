import React from 'react';
import classes from './Box.module.css'
const Box = (props) => {
    const className = [classes.card, classes['card-1']].join(' ')
    return (
        <div className={className} onClick={props.delete}>
            {props.children}
        </div>
    );
}

export default Box;
