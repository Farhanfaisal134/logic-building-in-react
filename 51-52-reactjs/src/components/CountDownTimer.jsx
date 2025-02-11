import React, { useEffect, useState } from 'react'

const CountDownTimer = () => {
  const targetDate = '2025-12-31T23:59:59';

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        // 1000ms * 60 sec * 60 min * 24 hours = 86400000ms (1 din) 
        // 29030400000 / 86400000 = 336 days
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const padWithZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  if (!timeLeft) {
    return (
      <div className="flex items-center justify-center text-xl font-bold text-red-500">
        Countdown Ended!
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-4 gap-4 text-center bg-gray-800 text-white p-4 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4">
            <span className="text-2xl md:text-4xl font-bold">{padWithZero(timeLeft.days)}</span>
            <span className="md:text-lg">Days</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-2xl md:text-4xl font-bold">{padWithZero(timeLeft.hours)}</span>
            <span className="md:text-lg">Hours</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-2xl md:text-4xl font-bold">{padWithZero(timeLeft.minutes)}</span>
            <span className="md:text-lg">Minutes</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-2xl md:text-4xl font-bold">{padWithZero(timeLeft.seconds)}</span>
            <span className="md:text-lg">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CountDownTimer;