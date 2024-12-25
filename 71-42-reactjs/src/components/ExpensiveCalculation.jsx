import React, { useState, useMemo } from "react";

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    return count ** 2;
  }, [count]);

  return (
    <div className="p-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here..."
        className="border p-2 mb-4"
      />
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment Count
      </button>
      <p>Expensive Calculation Result: {expensiveResult}</p>
    </div>
  );
};

export default ExpensiveCalculation;
