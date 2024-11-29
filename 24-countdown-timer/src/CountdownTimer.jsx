import React, { useEffect, useRef, useState } from 'react'
import Button from './components/Button';

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime)
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
    }
  }, [isRunning]);

  function handlePauseAndResume() {
    setIsRunning((prev) => !prev);
  };

  function handleReset() {
    clearInterval(intervalReference.current)
    setTime(initialTime)
    setIsRunning(false)
  };

  function handleStart() {
    setIsRunning(true)
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className='flex flex-col gap-4 items-center'>
      <p className='text-2xl font-bold'>{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</p>
      <div className='flex gap-2'>
        <Button
          onClick={handlePauseAndResume}
          text={`${isRunning ? "Puse" : "Resume"}`}
        />
        <Button
          onClick={handleReset}
          text="Reset"
        />
        <Button
          onClick={handleStart}
          text="Start"
        />
      </div>
    </div>
  )
}

export default CountdownTimer;