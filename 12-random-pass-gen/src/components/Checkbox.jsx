import React from 'react'

const Checkbox = ({ title, onChange, state }) => {
  return (
    <div className='flex gap-2 md:text-2xl items-center'>
      <input
        type='checkbox'
        onChange={onChange}
        checked={state}
        className="md:w-6 md:h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      <label>{title}</label>
    </div>
  )
}

export default Checkbox