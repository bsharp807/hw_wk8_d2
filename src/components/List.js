import React from 'react';
import Item from './Item';

const List = (props) => {
  return(
    <div>
      <h2>LIST OF STUFF</h2>
      <div>
        {props.items.map((item, index) => {
          return(
            <Item
            name={item.name}
            food={item.food}
            hates={item.hates}
            index={index}
            key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default List;
