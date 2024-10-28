import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 font-bold rounded-lg bg-gray-600
      text-white hover:bg-gray-700 transition-all"
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button