import React from 'react'
import CountdownTimer from './components/CountdownTimer';

const App = () => {
  const targetDate = '2024-12-31T23:59:59'; // Change to your desired date
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <CountdownTimer targetDate={targetDate} />
    </div>
  )
}

export default App;