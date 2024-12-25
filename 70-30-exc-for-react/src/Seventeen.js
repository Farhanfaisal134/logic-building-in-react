import React, { useState } from "react";

export default function Seventeen() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <input type="color" onChange={handleChange} />{" "}
      <span>click and select color</span>
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: selectedColor,
        }}
      ></div>
    </div>
  );
}
