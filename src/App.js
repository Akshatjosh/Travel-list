import { useState } from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import "./index.css";
function App() {
  const [items, setItems] = useState([]);

  const handleItem = (newItem) => {
    // Changed parameter name to newItem
    setItems((prevItems) => [...prevItems, newItem]); // Appending newItem to prevItems
  };

  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

  const handleDelete = (id) => {
    setItems((items) => items.filter((i) => i.id !== id));
  };
  const handleUpdateItem = (id) => {
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  };
  const handleClearList = () => {
    const confirmed = window.confirm(
      "are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form
        items={initialItems}
        onAddItems={handleItem}
        onDeleteItems={handleDelete}
      />
      <PackingList
        items={items}
        onDeleteItems={handleDelete}
        onUpdateItems={handleUpdateItem}
        onClearList={handleClearList}
      />{" "}
      {/* Changed to use the items state */}
      <Stats items={items} />
    </div>
  );
}
export default App;
