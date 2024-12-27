import React, { useState } from "react";

const ControlledInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border p-2"
      />
      <p>Value: {value}</p>
    </div>
  );
};

export default ControlledInput;
