import React from 'react';

// React.memo ensures that Item only re-renders when its props (name) change
const Item = React.memo(({ name }) => {
  console.log('Rendering Item:', name); // Log when an item is rendered for optimization tracking
  return <li className="item">{name}</li>;
});

export default Item;
