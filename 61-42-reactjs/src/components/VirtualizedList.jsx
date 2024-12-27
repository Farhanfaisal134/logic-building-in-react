import React, { useState } from 'react'

const VirtualizedList = ({ height = 400, width = 300, itemHeight = 36 }) => {
  const list = Array.from({ length: 100000 }, (_, index) => `Item ${index + 1}`);

  const [visibleRange, setVisibleRange] = useState({
    startIndex: 0,
    endIndex: Math.floor(height / itemHeight),
  });

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = startIndex + Math.floor(height / itemHeight);
    setVisibleRange({ startIndex, endIndex });
  };

  const visibleItems = list.slice(visibleRange.startIndex, visibleRange.endIndex + 1);

  return (
    <div className="w-full h-screen bg-gray-800 flex justify-center items-center">
      <div
        className="overflow-auto bg-gray-600 rounded shadow-lg"
        onScroll={handleScroll}
        style={{ height, width }}
      >
        <div style={{ height: list.length * itemHeight, position: "relative" }}>
          {visibleItems.map((item, index) => (
            <div
              key={visibleRange.startIndex + index}
              className="absolute top-0 left-0 w-full text-center text-white bg-blue-500 border-b-2
              border-gray-800 flex items-center justify-center"
              style={{
                height: itemHeight,
                top: (visibleRange.startIndex + index) * itemHeight,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;