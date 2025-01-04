import React from 'react'

const ProgressBar = ({ progress }) => {
  return (
    <div className="relative w-full bg-gray-300 rounded-full h-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}></div>
      <span className="absolute inset-0 flex items-center justify-center text-white font-semibold">
        {progress}%
      </span>
    </div>
  )
};

export default ProgressBar;