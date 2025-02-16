import React, { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItems, onUpdateItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortItems;
  if (sortBy === "input") sortItems = items;
  if (sortBy === "description")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <>
      <div className="list">
        <ul>
          {sortItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItems={onDeleteItems}
              onUpdateItems={onUpdateItems}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by Packed Items</option>
          </select>
          <button onClick={onClearList}>Clear list</button>
        </div>
      </div>
    </>
  );
}

export default PackingList;
