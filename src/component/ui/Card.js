import React from 'react'
import Class from "./card.module.css"
//this component is a special custom component that we wil wrap around jsx element
const Card = (props) => {
  return (
    <div className={Class.card} >
        {props.children}
    </div>
    
  );
};

export default Card