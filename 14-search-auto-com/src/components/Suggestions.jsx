import React from 'react'

const Suggestions = ({ handleClick, data }) => {

  return (
    <ul className='flex flex-col bg-white m-3 border-zinc-200 border'>
      {
        data && data.length
          ? data.map((item, index) => (
            <li
              className='px-2 py-2 text-xl font-bold text-center border-2 hover:bg-slate-600 hover:text-white'
              onClick={handleClick}
              key={index}
            >{item}</li>
          ))
          : null}
    </ul>
  )
};

export default Suggestions;