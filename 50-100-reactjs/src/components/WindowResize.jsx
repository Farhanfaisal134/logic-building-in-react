import React, { useLayoutEffect, useState } from 'react'

const WindowResize = () => {
  const [windowSize, setWindowSize] = useState(
    {
      width: 0,
      height: 0
    }
  );

  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = windowSize;
  return (
    <div
      className='w-full h-screen bg-gray-700 text-white flex flex-col
       gap-5 pt-8'>
      <div className='text-center flex flex-col gap-5'>
        <h1 className='text-3xl font-bold'>Width: {width}</h1>
        <h1 className='text-3xl font-bold'>Height: {height}</h1>
      </div>
    </div>
  )
}

export default WindowResize