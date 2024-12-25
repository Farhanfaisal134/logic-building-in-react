import React, { useState } from "react";

const DropdownTextbox = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="p-4">
      <select onChange={handleChange} className="border p-2 mb-4 block">
        <option value="">Select an Option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
      </select>
      <input
        type="text"
        value={selectedValue}
        readOnly
        className="border p-2"
      />
    </div>
  );
};

export default DropdownTextbox;
