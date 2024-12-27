import React from "react";

const Parent = () => {
  const [isDisabled, setIsDisabled] = React.useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsDisabled(!isDisabled)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Toggle Textbox
      </button>
      <Child isDisabled={isDisabled} />
    </div>
  );
};

const Child = ({ isDisabled }) => {
  return (
    <input
      type="text"
      disabled={isDisabled}
      className="border p-2"
      placeholder={isDisabled ? "Disabled" : "Enabled"}
    />
  );
};

export default Parent;
