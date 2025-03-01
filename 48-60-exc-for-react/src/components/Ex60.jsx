import React, { useState } from 'react'

const Ex60 = () => {
  const [fields, setFields] = useState({
    name: "er saurav",
    class: 1,
    roll: 12,
    subject: "maths"
  })

  return (
    <div className='flex flex-col w-[300px] gap-12 m-12'>
      {
        Object.keys(fields).map((item, index)=>(
          <input name={item} value={fields[item]} key={index} className='p-3 rounded border' />
        ))
      }
    </div>
  )
}

export default Ex60