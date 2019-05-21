import React from 'react';

const Item = (props) => {
  return(
    <div>
      The honourable {props.name} has eaten {props.food} a grand total of {Math.floor(Math.random() * props.index + 20)} times. However, on {props.index + 20} occasions, they have had the misfortune of experiencing {props.hates}. How horrible!
    </div>
  )
}

export default Item;
