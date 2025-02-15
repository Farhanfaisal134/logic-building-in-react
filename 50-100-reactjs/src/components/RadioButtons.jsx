import React, { useState } from "react";

const RadioButtons = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Get the selected value
  };

  return (
    <div className="p-4">
      {options.map((option, index) => (
        <label key={index} className="block mb-2">
          <input
            type="radio"
            name="options"
            value={option}
            checked={selectedValue === option}
            onChange={handleChange}
            className="mr-2"
          />
          {option}
        </label>
      ))}
      <p className="mt-4">Selected: {selectedValue || "None"}</p>
    </div>
  );
};

export default RadioButtons;
