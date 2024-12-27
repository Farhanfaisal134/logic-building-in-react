import React from 'react'

const RadioButtons = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className='p-4'>
      {options.map((option, index) => (
        <label key={index} className="block mb-2">
          <input type="radio" name="options" value={option} className="mr-2" />
          {option}
        </label>
      ))}
    </div>
  )
};

export default RadioButtons;