import React, { useEffect, useState } from 'react'

const App = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (progress < 100) {
      let interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1))
      }, 100);
      return () => clearInterval(interval)
    };

  }, [progress]);

  function handleReset() {
    setProgress(0)
  };

  return (
    <div className="pt-10 flex justify-center items-center flex-col gap-3">
      <div className="w-72 md:w-2/4 h-8 bg-blue-300 rounded-lg relative">
        <div className='absolute h-full bg-blue-700 rounded-lg overflow-hidden' style={{ width: `${progress}%` }}>
          <span className="absolute inset-0 flex justify-end items-center text-white font-semibold">
            {progress}%
          </span>
        </div>
      </div>

      <button className='bg-blue-500 p-2 text-xl text-white rounded-md' onClick={handleReset}>Reset Bar</button>
    </div>
  )
};

export default App;