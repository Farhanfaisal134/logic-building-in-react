import React, { useRef, useState } from 'react'

const Tooltip = ({ children, text, delay = 500 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleShowTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleHideTooltip = () => {
    clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  return (
    <button
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
      className="px-4 py-3 rounded-md bg-green-500 
      text-xl text-white font-semibold relative"
    >
      {children}
      {
        isVisible ? <span className='absolute -bottom-20 left-0 bg-black 
        text-white px-6 py-3 rounded-md'>{text}</span> : null
      }
    </button>
  )
};

export default Tooltip;