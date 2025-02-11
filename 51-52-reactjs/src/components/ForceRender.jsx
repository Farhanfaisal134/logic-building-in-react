import React, { useState } from "react";

const ForceRender = () => {
  const [, setCount] = useState(0);

  return (
    <div className="p-4 text-center">
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Force Rerender
      </button>
    </div>
  );
};

export default ForceRender;
