import React from "react";

function Item({ itemProp, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(itemProp.id)} />
      <span style={itemProp.packed ? { textDecoration: "line-through" } : {}}>
        {itemProp.quantity} {itemProp.description}
      </span>
      <button onClick={() => onDeleteItem(itemProp.id)}>❌</button>
    </li>
  );
}

export default Item;
