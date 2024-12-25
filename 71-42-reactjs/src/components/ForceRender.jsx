import React, { useReducer } from "react";

const ForceRender = () => {
  const [, forceRender] = useReducer((x) => x + 1, 0);

  return (
    <div className="p-4 text-center">
      <button
        onClick={forceRender}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Force Rerender
      </button>
    </div>
  );
};

export default ForceRender;
