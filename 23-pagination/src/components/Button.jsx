import React from 'react'

const Button = ({ text, className, onClick, disabled }) => {
  return (
    <button className={`px-4 py-2 tetx-xl font-semibold text-white rounded-md ${className}
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'text-white'}`}
      disabled={disabled}
      onClick={onClick}
    >{text}
    </button>
  )
};

export default Button;