import React, { useState } from 'react'

const NesteadCircles = () => {
  const [num, setNum] = useState(0);

  const renderCircles = (n) => {
    if (n <= 0) return null;
    return (
      <div
        className="flex items-center justify-center border-2 border-blue-500 rounded-full"
        style={{
          width: `${n * 50}px`,
          height: `${n * 50}px`,
        }}
      >
        {renderCircles(n - 1)}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-10 bg-gray-900 w-full min-h-screen">
      <input
        type="number"
        className="border-2 border-gray-300 rounded p-2 outline-none"
        placeholder="Enter a number"
        onChange={(e) => setNum(parseInt(e.target.value) || 0)}
      />
      <div className="relative">{renderCircles(num)}</div>
    </div>
  );
};

export default NesteadCircles;