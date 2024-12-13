import React, { useEffect, useState } from 'react'

function getNums() {
  let list = [];
  for (let i = 1; i <= 8; i++) {
    list.push(i)
    list.push(i)
  };
  return list;
};

const App = () => {
  const [stage, setStage] = useState('init');
  const [opened, setOpened] = useState([]);
  const [solvedList, setSolvedList] = useState([]);
  const [nums, setNums] = useState(getNums());

  const randdomNums = () => {
    const copyNums = [...nums]
    return copyNums.sort(() => Math.random() - 0.5)
  };

  function handleStart() {
    setStage("start");
    setNums(randdomNums());
    setSolvedList([]);
  };

  const handleClick = (num, index) => {
    if (opened.length === 2) return
    setOpened((prev) => [...prev, index])
  };

  useEffect(() => {
    if (opened.length === 2) {
      setTimeout(() => {
        const id1 = opened[0];
        const id2 = opened[1];
        if (nums[id1] === nums[id2]) {
          setSolvedList((prev) => [...prev, nums[id1]])
        };
        setOpened([]);
      }, 1000);
    };
  }, [opened]);

  useEffect(() => {
    if (solvedList.length === 8) {
      setStage("win")
    };
  }, [solvedList]);

  const getClassName = (num, index) => {
    if (solvedList.includes(num)) {
      return "remove";
    } else if (opened.includes(index)) {
      return "bg-blue-500 text-white";
    } else {
      return "bg-gray-500 text-gray-800";
    };
  };

  return (
    <div className='w-full h-screen bg-gray-800 p-4 flex flex-col gap-4 items-center'>
      <h1 className='text-2xl text-white font-bold'>Memory Game</h1>
      {stage === 'init' && (
        <button className='p-3 bg-blue-500 text-xl rounded-md text-white' onClick={handleStart}>
          Play Game
        </button>
      )}
      {stage === 'start' && (
        <div className='w-full max-w-[400px] mx-auto grid grid-cols-4 gap-2 pt-4'>
          {nums.map((num, i) => (
            <div
              key={i}
              className={`w-16 h-16 sm:w-24 sm:h-20 flex justify-center items-center text-lg font-bold 
                cursor-pointer shadow-md 
                ${getClassName(num, i)}`}
              onClick={() => handleClick(num, i)}
            >
              {/* Show the number if it's opened or solved */}
              {opened.includes(i) && num}
            </div>
          ))}
        </div>
      )}
      {stage === 'win' && (
        <div className='w-full flex flex-col gap-4 text-xl items-center text-white'>
          <h1 className='text-2xl font-semibold'>You won the Game!</h1>
          <button className='p-3 bg-blue-500 text-xl rounded-md text-white' onClick={handleStart}>
            Play Again
          </button>
        </div>
      )}
    </div>
  )
};

export default App;