import React, { useEffect, useRef, useState } from 'react'

const IntractiveShapes = () => {
  const [grid, setGrid] = useState(Array.from({ length: 3 }, () => new Array(3).fill(false)));
  const queue = useRef([]);
  const timerId = useRef([]);
  const [isQueueFull, setIsQueueFull] = useState(false);
  console.log(queue);

  const handleOnClick = (rowIdx, colIdx, flag) => {
    if (timerId.current.length > 0 && flag) return;
    if (grid[rowIdx][colIdx] && flag) return;

    let gridDeepCopy = [...grid];
    gridDeepCopy[rowIdx][colIdx] = flag;
    if (flag) {
      queue.current.push([rowIdx, colIdx]);
      if (queue.current.length === 9) setIsQueueFull(true);
    };

    setGrid(gridDeepCopy);
  };

  useEffect(() => {
    if (isQueueFull) {
      queue.current.forEach(([rowIdx, colIdx], idx) => {
        timerId.current[idx] = setTimeout(() => {
          handleOnClick(rowIdx, colIdx, false);
          if (idx === timerId.current.length - 1) {
            timerId.current = [];
            setIsQueueFull(false); // Reset queue status after clearing
          }
        }, 1000 * (idx + 1));
      });
      queue.current = [];
    };
  }, [isQueueFull]);

  useEffect(() => {
    return () => {
      timerId.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className='w-full h-screen p-4 md:p-8 bg-gray-800 flex justify-center items-center flex-col gap-4'>
      <h1 className='text-2xl text-white font-semibold'>Interactive Shapes</h1>
      <div className="max-w-[400px] mx-auto grid gap-3 grid-cols-3">
        {grid.map((row, rowIdx) => {
          return row.map((cell, colIdx) => {
            return (
              <div
                className={`border border-gray-200 w-20 h-20 md:w-28 md:h-28 
                  ${cell ? "bg-blue-600" : ""}`}
                key={`${rowIdx}-${colIdx}`}
                onClick={() => handleOnClick(rowIdx, colIdx, true)}
              ></div>
            );
          });
        })}
      </div>
    </div>
  )
}

export default IntractiveShapes