import React, { useState } from 'react'

const Ex31 = () => {
  const [person, setPerson] = useState({
    name: 'Joh Doe',
    age: '18'
  })

  const handleChange = (e)=>{
    const input = e.target
    const key = input.name
    const value = input.value
    setPerson({
      ...person,
      [key]: value
    })
  }

  return (
    <div className='bg-gray-100 min-h-screen grid grid-cols-2 w-8/12 mx-auto gap-12 p-6'>
      <div className='flex flex-col gap-6'>
        <input name="name" className='bg-white border p-3 rounded' placeholder='Name' onChange={handleChange}/>
        <input name="age" className='bg-white border p-3 rounded' placeholder='Age' type="number" onChange={handleChange}/>
      </div>
      <div className='bg-white rounded-lg p-8 shadow-lg text-center h-fit'>
          <i className='ri-user-line text-8xl'></i>
          <h1 className='text-xl font-medium'>{person.name}</h1>
          <p>Age - {person.age} Years</p>
      </div>
    </div>
  )
}

export default Ex31