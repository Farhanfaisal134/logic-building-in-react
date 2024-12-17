import React, { useState } from "react";

export default function Two() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> + </button>
      <span> {count} </span>
      <button onClick={count > 0 ? () => setCount(count - 1) : null}>-</button>
    </div>
  );
}
