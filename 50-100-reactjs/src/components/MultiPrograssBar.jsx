import React, { useState, useEffect } from "react";

const MultiPrograssBar = () => {
  const [progressValues, setProgressValues] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgressValues((prev) => prev.map((value, index) => Math.min(value + 1, (index + 1) * 20)));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-10 flex justify-center items-center flex-col gap-5">
      {
        progressValues.map((progress, i) => (
          <div key={i} className="w-72 md:w-2/4 h-8 bg-blue-300 rounded-lg relative">
            <div
              className="absolute h-full bg-blue-700 rounded-lg overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <span className="absolute inset-0 flex justify-end items-center text-white font-semibold">
                {progress}%
              </span>
            </div>
          </div>
        ))
      }

      <button
        className="bg-blue-500 p-2 text-xl text-white rounded-md"
        onClick={() => setProgressValues([0, 0, 0, 0, 0])}>
        Reset Bars
      </button>
    </div>
  );
};

export default MultiPrograssBar;