import React, { useRef } from 'react';

const AccessDOM = () => {
  const inputRef = useRef(null); // Ref define kiya

  const focusInput = () => {
    inputRef.current.focus(); // Ref ke through input element ko access karke focus kiya
  };

  return (
    <div className="p-4">
      <input ref={inputRef} type="text" className="border p-2" />
      <button onClick={focusInput} className="bg-blue-500 text-white p-2 mt-4 rounded">
        Focus Input
      </button>
    </div>
  );
}

export default AccessDOM;
