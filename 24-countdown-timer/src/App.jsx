import React from 'react'
import { useState, useRef, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(60)
  const [isRunning, setIsRunning] = useState(false);
  const intervalReference = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalReference.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalReference.current)
            setIsRunning(false)
          };
          return prevTime - 1
        })
      }, 1000);
    };

    return () => {
      clearInterval(intervalReference.current)
    };
  }, [isRunning]);

  function handlePauseAndResume() {
    setIsRunning((prev) => !prev);
  };

  function handleReset() {
    clearInterval(intervalReference.current)
    setTime(60)
    setIsRunning(false)
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className='w-full h-screen bg-gray-900 text-white'>
      <div className="max-w-3xl mx-auto flex pt-8 flex-col gap-4 items-center">
        <h1 className='font-bold text-2xl'>CountDown Timer</h1>
        <div className='flex flex-col gap-4 items-center'>
          <p className='text-2xl font-bold'>{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</p>
          <div className='flex gap-2'>
            <button className={`px-4 py-2 text-xl bg-yellow-400 border-2 border-gray-600 rounded-md font-bold`}
              onClick={handlePauseAndResume}
            >{isRunning ? "Stop" : "Start"}</button>
            <button className={`px-4 py-2 text-xl bg-yellow-400 border-2 border-gray-600 rounded-md font-bold`}
              onClick={handleReset}
            >Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;