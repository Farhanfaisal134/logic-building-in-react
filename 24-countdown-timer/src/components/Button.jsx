import React from 'react'

const Button = ({ className, text, onClick }) => {
  return (
    <button className={`px-4 py-2 text-xl ${className}
       bg-yellow-400 border-2 border-gray-600 rounded-md font-bold`}
      onClick={onClick}
    >{text}</button>
  )
}

export default Button;