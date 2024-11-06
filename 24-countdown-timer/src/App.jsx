import React from 'react'
import CountdownTimer from './CountdownTimer';

const App = () => {
  return (
    <div className="max-w-3xl mx-auto flex mt-8 flex-col gap-4 items-center">
      <h1 className='font-bold text-2xl'>CountDown Timer</h1>
      <CountdownTimer initialTime={60} />
    </div>
  )
};

export default App;