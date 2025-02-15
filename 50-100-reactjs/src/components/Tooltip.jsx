import React, { useEffect, useState } from 'react'

const Tooltip = () => {
  const [hover, setHover] = useState(false)

  function handelEnter() {
    setTimeout(() => {
      setHover(true)
    }, 500);
  };

  return (
    <div className='flex justify-center items-center p-10 flex-col gap-2'>
      <h1 className='text-2xl font-bold'>Tooltip</h1>
      <button className='p-2 bg-gray-900 text-white rounded-md'
        onMouseEnter={handelEnter}
        onMouseLeave={() => setHover(false)}>Hover ME</button>
      {hover && <button className='p-2 bg-blue-600 rounded-md text-white'>Show Tooltip</button>}
    </div>
  )
};

export default Tooltip;