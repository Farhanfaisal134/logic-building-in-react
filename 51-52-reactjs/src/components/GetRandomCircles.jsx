import React from 'react'
import { useState } from 'react';

const GetRandomCircles = () => {
  const [circles, setCircles] = useState([]);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Random radius generator
  // Math.floor(Math.random() * (max - min + 1)) + min;
  const getRandomRadius = () => Math.floor(Math.random() * (200 - 20 + 1)) + 20;

  // Check if circles intersect
  const checkIntersection = (circle1, circle2) => {
    const distance = Math.sqrt(Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2));
    return distance < circle1.radius + circle2.radius;
  };

  // Handle click event
  const handleClick = (e) => {
    const newCircle = {
      x: e.clientX,
      y: e.clientY,
      radius: getRandomRadius(),
    };

    const updatedCircles = [...circles, newCircle];
    if (updatedCircles.length > 2) {
      setCircles([]);
      setIsIntersecting(false);
    } else {
      setCircles(updatedCircles);
      if (
        updatedCircles.length === 2 &&
        checkIntersection(updatedCircles[0], updatedCircles[1])
      ) {
        setIsIntersecting(true);
      } else {
        setIsIntersecting(false);
      }
    };
  };

  return (
    <div
      className={`w-screen h-screen ${isIntersecting ? 'bg-red-500' : 'bg-blue-500'
        }`}
      onClick={handleClick}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          className="absolute bg-green-500 rounded-full"
          style={{
            width: `${circle.radius * 2}px`,
            height: `${circle.radius * 2}px`,
            left: `${circle.x - circle.radius}px`,
            top: `${circle.y - circle.radius}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default GetRandomCircles;