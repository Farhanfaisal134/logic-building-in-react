import React, { useRef, useState } from 'react'

const Toast = () => {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});

  const handleClose = (id) => {
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id];
    setToasts((prevToasts) => {
      const filteredArr = prevToasts.filter((toast) => toast.id !== id);
      return filteredArr;
    });
  };

  const handleAdd = (message, type) => {
    const id = new Date().getTime();
    const newToasts = [...toasts, { id, message, type }];
    setToasts(newToasts);
    timersRef.current[id] = setTimeout(() => handleClose(id), 5000);
  };

  return (
    <div className="relative min-h-screen bg-gray-700 p-4">
      <div className="fixed top-4 right-4 space-y-4 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center p-4 max-w-xs w-full rounded-md shadow-lg 
              ${toast.type === "success" ? "bg-green-100 text-green-700" : ""} 
              ${toast.type === "error" ? "bg-red-100 text-red-700" : ""} 
              ${toast.type === "info" ? "bg-blue-100 text-blue-700" : ""}`}
          >
            <span className="flex-grow">{toast.message}</span>
            <button
              onClick={() => handleClose(toast.id)}
              className="ml-4 text-sm font-bold"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Buttons to add different types of toasts */}
      <div className="flex flex-col space-y-2 mt-10 max-w-fit">
        <button
          onClick={() => handleAdd("This is a success message!", "success")}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Show Success Toast
        </button>
        <button
          onClick={() => handleAdd("This is an error message!", "error")}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Show Error Toast
        </button>
        <button
          onClick={() => handleAdd("This is an info message!", "info")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Show Info Toast
        </button>
      </div>
    </div>
  );
}

export default Toast