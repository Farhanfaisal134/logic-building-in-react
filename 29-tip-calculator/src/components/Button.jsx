import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='px-4 py-2 rounded-md bg-gray-700 text-white text-xl'
    >{text}</button>
  )
}

export default Button