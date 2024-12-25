import React, { useState } from 'react'

const options = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" }
];

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="p-4">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="border p-2 rounded">
        <option value="">Select an Option</option>
        {
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))
        }
      </select>
      <p className="mt-4">Selected Option: {selectedOption}</p>
    </div>
  )
};

export default Dropdown;