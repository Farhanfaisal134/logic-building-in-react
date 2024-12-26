import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const isAm = hours < 12;
    hours = hours % 12 || 12;

    return {
      hours,
      minutes,
      seconds,
      period: isAm ? 'AM' : 'PM',
    };
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <div className="text-4xl font-bold max-w-2xl mx-auto bg-gray-900 p-4 rounded-md">
        {time.hours.toString().padStart(2, '0')}:
        {time.minutes.toString().padStart(2, '0')}:
        {time.seconds.toString().padStart(2, '0')}
      </div>
      <div className="text-2xl mt-2">{time.period}</div>
    </div>
  );
};

export default DigitalClock;
