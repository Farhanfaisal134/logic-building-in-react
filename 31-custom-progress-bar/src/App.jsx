import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
      }, 1000); // Adjust speed by changing the interval (in milliseconds)

      return () => clearInterval(interval);
    }
  }, [progress]);

  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-3xl mx-auto gap-4">
      <h1 className="text-2xl font-bold mb-4">Animated Progress Bar with Counting</h1>

      {/* ProgressBar Component */}
      <ProgressBar progress={progress} />

      {/* Button to Reset Progress */}
      <button
        onClick={() => setProgress(0)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200"
      >
        Reset Progress
      </button>
    </div>
  );
}

export default App