import React from "react";

const CallOnEveryRerender = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Component re-rendered!");
  });

  return (
    <div className="p-4">
      <p className="text-lg">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default CallOnEveryRerender;
