import React, { useState } from 'react'

const ToggleSwitchButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn(!isOn);

  return (
    <div className={`flex items-center gap-4 w-full h-screen justify-center ${isOn ? "bg-gray-700" : ""}`}>
      <div
        onClick={handleToggle}
        className={`w-16 h-8 flex items-center rounded-full cursor-pointer transition-all duration-300 
          ${isOn ? 'bg-gray-500' : 'bg-gray-400'
          }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 
            ${isOn ? 'translate-x-8' : 'translate-x-0'
            }`}
        ></div>
      </div>
      <span className={`${isOn ? "text-white" : "text-gray-800"} font-medium`}>
        {isOn ? 'ON' : 'OFF'}
      </span>
    </div>
  );
};

export default ToggleSwitchButton;