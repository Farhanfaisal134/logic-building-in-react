import React, { useState, useRef } from "react";

const App = () => {
  const [time, setTime] = useState(0); // Time track karne ke liye
  const [isRunning, setIsRunning] = useState(false); // Start/Pause ka status
  const timerRef = useRef(null); // Timer ko track karne ke liye

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Stopwatch</h1>
        <p className="text-3xl font-mono text-blue-600 mb-6">{formatTime()}</p>
        <div className="flex justify-around">
          <button
            onClick={startTimer}
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600"
          >
            Start
          </button>
          <button
            onClick={pauseTimer}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600"
          >
            Pause
          </button>
          <button
            onClick={resetTimer}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
