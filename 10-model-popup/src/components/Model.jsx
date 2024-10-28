import React, { useEffect, useRef } from "react";

const Model = ({ id, header, body, footer, onClose }) => {
  const modalRef = useRef();

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      id={id || "Modal"}
      className="fixed left-0 top-0 w-full h-full z-50 overflow-auto bg-black 
      bg-opacity-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white w-[90%] max-w-[600px] border rounded-lg shadow-lg relative p-4"
      >
        <div className="bg-green-500 text-white px-4 py-2 rounded-t-lg flex justify-between items-center">
          <div></div>
          <h2 className="text-center text-xl">{header ? header : "Header"}</h2>
          <span
            onClick={onClose}
            className="cursor-pointer text-xl font-bold"
          >
            &times;
          </span>
        </div>
        <div className="p-6 text-center">
          {body ? body : <p>This is our Modal Body</p>}
        </div>
        <div className="bg-gray-500 text-white text-center font-bold py-4 rounded-b-lg">
          {footer ? footer : "Footer"}
        </div>
      </div>
    </div>
  );
};

export default Model;
