import React from "react";

const AddToArray = () => {
  const [items, setItems] = React.useState([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div className="p-4">
      <button
        onClick={addItem}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Item
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToArray;
