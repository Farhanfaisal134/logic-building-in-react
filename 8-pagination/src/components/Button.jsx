import React from 'react'

const Button = ({ text, className, onClick, disabled }) => {
  return (
    <button className={`px-2 md:px-4 md:py-2 py-1 tetx-xl font-semibold text-white rounded-md ${className}
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >{text}
    </button>
  )
};

export default Button;