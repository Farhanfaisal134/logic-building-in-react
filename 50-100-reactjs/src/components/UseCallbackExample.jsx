import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick }) => {
  console.log("Button rendered");

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 text-white px-4 py-2 rounded">
      Click Me
    </button>
  );
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="p-4">
      <p>Count: {count}</p>
      <Button handleClick={handleClick} />
    </div>
  );
};

export default UseCallbackExample;
