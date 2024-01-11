import React from "react";

function Stats({ items }) {
  if (items.length === 0) {
    return <p className="stats">No items added yet</p>;
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Done! Let's Go! ✈"
          : `You have ${numItems} items on your list, and you already packed 
        ${numPacked} - ${percentage}% of them.`}
      </em>
    </footer>
  );
}

export default Stats;
