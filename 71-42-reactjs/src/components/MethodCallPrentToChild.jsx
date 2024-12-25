import React, { useState } from 'react';

const MethodCallPrentToChild = () => {
  const [message, setMessage] = useState("No message yet");

  const updateMessage = () => {
    setMessage("Hello from Child!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl">{message}</h2>
      <ChildComponent updateMessage={updateMessage} /> {/* Parent method ko pass kiya */}
    </div>
  );
}

const ChildComponent = ({ updateMessage }) => {
  return (
    <div className="p-4">
      <button onClick={updateMessage} className="bg-green-500 text-white p-2 rounded">
        Call Parent Method
      </button>
    </div>
  );
};

export default MethodCallPrentToChild;
