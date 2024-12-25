import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="p-4 text-center">
      <p className="text-lg mb-4">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
      >
        Increment
      </button>
      <button
        onClick={() => setCount((prev) => prev > 0 ? prev - 1 : prev)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
