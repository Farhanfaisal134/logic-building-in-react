import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
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
  }

  return (
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
  )
};

export default CountdownTimer;