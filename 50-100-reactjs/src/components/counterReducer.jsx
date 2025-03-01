import React, { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state > 0 ? state - 1 : state;
    default:
      return state;
  };
};

const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="p-4 text-center">
      <p className="text-lg mb-4">Count: {count}</p>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="bg-green-500 text-white px-4 py-2 rounded mr-2">
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="bg-red-500 text-white px-4 py-2 rounded">
        Decrement
      </button>
    </div>
  );
};

export default CounterWithReducer;
