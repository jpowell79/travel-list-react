import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // Don't mutate state directly, so create new array, and spread in the previous items, then add the new item.
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    // filter out the item with the matching id
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    // map over the items, and if the id matches, toggle the packed property
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    // filter out all items that are packed
    const confirmweAreDeleting = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmweAreDeleting) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
