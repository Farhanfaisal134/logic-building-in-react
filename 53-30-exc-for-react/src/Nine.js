import React, { useState } from "react";

export default function Nine() {
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [toggle, isToggle] = useState(false);

  function handleClick() {
    let updatedClr = backgroundColor === "#000000" ? "yellow" : "#000000"
    setBackgroundColor(updatedClr)
    isToggle(!toggle)
  };

  return (
    <>
      <button onClick={handleClick}>{toggle ? "🟡" : "⚫"}</button>
      <div
        style={{
          backgroundColor,
          width: "200px",
          height: "200px",
          cursor: "pointer",
        }}
      >
        Click Btn to Change Color
      </div>
    </>
  );
}

