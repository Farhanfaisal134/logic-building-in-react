import React, { useState, useRef } from "react";

const InfiniteCounterApp = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startCounting = (type) => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCount((prev) => (type === "inc" ? prev + 1 : prev - 1));
    }, 100);
  };

  const stopCounting = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Hold to Increment/Decrement</h1>
      <div className="flex items-center gap-4">
        <button
          className="px-6 py-3 bg-red-600 text-white rounded-lg text-xl active:scale-95"
          onMouseDown={() => startCounting("dec")}
          onMouseUp={stopCounting}
          onMouseLeave={stopCounting}>
          -
        </button>
        <span className="text-3xl font-semibold w-16 text-center">{count}</span>
        <button
          className="px-6 py-3 bg-green-600 text-white rounded-lg text-xl active:scale-95"
          onMouseDown={() => startCounting("inc")}
          onMouseUp={stopCounting}
          onMouseLeave={stopCounting}>
          +
        </button>
      </div>
    </div>
  );
};

export default InfiniteCounterApp;