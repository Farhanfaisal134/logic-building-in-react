import React, { useState } from "react";

const CheckBoxExample = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    };
  };

  return (
    <div>
      <h3>Select Fruits:</h3>
      <label>
        <input
          type="checkbox"
          value="Apple"
          checked={selectedOptions.includes("Apple")}
          onChange={handleCheckboxChange}
        />
        Apple
      </label>
      <label>
        <input
          type="checkbox"
          value="Banana"
          checked={selectedOptions.includes("Banana")}
          onChange={handleCheckboxChange}
        />
        Banana
      </label>
      <label>
        <input
          type="checkbox"
          value="Mango"
          checked={selectedOptions.includes("Mango")}
          onChange={handleCheckboxChange}
        />
        Mango
      </label>

      <h4>Selected: {selectedOptions.join(", ")}</h4>
    </div>
  );
};

export default CheckBoxExample;
