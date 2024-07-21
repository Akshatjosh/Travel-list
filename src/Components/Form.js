import { useState } from "react";

function Form({ item, onAddItems }) {
  const [desc, setDesc] = useState("");
  const [quantit, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    if (!desc) {
      return;
    }
    const newItem = {
      description: desc,
      quantity: quantit,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    onAddItems(newItem);

    setDesc("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantit}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <option key={index} value={`${index + 1}`}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default Form;
