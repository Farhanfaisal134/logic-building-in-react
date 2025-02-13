import React, { useState } from "react";

const RadioButtonExample = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h3>Choose Gender:</h3>
      <label>
        <input
          type="radio"
          value="Male"
          checked={selectedOption === "Male"}
          onChange={handleRadioChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="Female"
          checked={selectedOption === "Female"}
          onChange={handleRadioChange}
        />
        Female
      </label>

      <h4>Selected: {selectedOption}</h4>
    </div>
  );
};

export default RadioButtonExample;
