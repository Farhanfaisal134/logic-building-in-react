import React, { useState, useEffect } from "react";

const StateUpdateEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("State Updated or Component Rerendered. Count:", count);
  }, [count]); // Dependency array mein `count`

  return (
    <div className="p-4">
      <p>Count: {count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default StateUpdateEffect;
