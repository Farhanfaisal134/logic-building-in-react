import React from 'react'

const Button = ({ content, onClick, className }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 bg-blue-700 hover:bg-blue-800 transition-all 
    duration-300 text-white text-xl rounded-md ${className}`}>{content}</button>
  )
}

export default Button;