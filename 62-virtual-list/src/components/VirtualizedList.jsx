import { useState } from "react";

export default function VirtualizedList({ height = 400, width = 300, itemHeight = 36 }) {
  const list = Array.from({ length: 100000 }, (_, index) => index + 1);

  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };

  const visibleList = list.slice(indices[0], indices[1] + 1);
  return (
    <div className="w-full h-screen bg-gray-800 flex justify-center">
      <div
        className="overflow-auto bg-gray-500"
        onScroll={handleScroll}
        style={{ height, width }}
      >
        <div style={{ height: list.length * itemHeight, position: "relative" }}>
          {visibleList.map((item, index) => {
            return (
              <div
                key={index}
                className="absolute top-0 w-full text-center text-white bg-coral border-t-2 border-gray-800 flex items-center justify-center"
                style={{
                  height: itemHeight,
                  top: (indices[0] + index) * itemHeight,
                }}
              >
                {"Item " + item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
