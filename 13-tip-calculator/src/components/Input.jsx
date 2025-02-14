import React from 'react'

const Input = ({ type, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className='w-full p-2 border border-gray-100 rounded-md bg-white outline-none text-2xl'
    />
  )
}

export default Input