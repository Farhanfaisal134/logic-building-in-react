import React, { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`Value: ${inputRef.current.value}`);
  };

  return (
    <div className="p-4">
      <input ref={inputRef} type="text" className="border p-2" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-2">
        Submit
      </button>
    </div>
  );
};

export default UncontrolledInput;
