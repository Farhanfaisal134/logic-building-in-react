import React, { useState, useEffect, useRef } from "react";

const Throttling = () => {
  const [top, setTop] = useState(0);
  const [throttledValue, setThrottledValue] = useState(0);
  const flagRef = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY);

      if (flagRef.current) {
        setThrottledValue(window.scrollY);
        flagRef.current = false;

        setTimeout(() => {
          flagRef.current = true;
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[1000rem] bg-gray-100">
      <div className="fixed top-0 left-0 w-full bg-white shadow-lg p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-green-600">Throttling in Action</h1>
        <hr className="my-4 border-green-400" />
        <h2 className="text-lg font-semibold text-blue-500">
          Normal: <span className="font-normal">{top}</span>
        </h2>
        <hr className="my-4 border-blue-400" />
        <h2 className="text-lg font-semibold text-red-500">
          Throttled: <span className="font-normal">{throttledValue}</span>
        </h2>
      </div>
    </div>
  );
};

export default Throttling;
