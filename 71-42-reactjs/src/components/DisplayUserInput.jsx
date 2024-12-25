import React, { useState } from "react";

const DisplayUserInput = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 mb-4"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // State update
      />
      <input
        type="text"
        className="border p-2"
        value={inputValue} // State ko dusre textbox mein bind kiya
        readOnly
      />
    </div>
  );
};

export default DisplayUserInput;