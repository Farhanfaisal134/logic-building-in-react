import React, { useState } from 'react'

const Ex59 = () => {
  const [student, setStudent] = useState({
    name: "er saurav",
    class: 1,
    roll: 21,
    address: {
      city: 'demo city',
      state: 'karnatka',
      country: 'india',
      pincode: 123456
    }
  })

  const handleChange = (e)=>{
    setStudent({
      ...student,
      address: {
        ...student.address,
        country: e.target.value
      }
    })
  }

  return (
    <div>
      <input onChange={handleChange} placeholder='Enter country' />
      {
        JSON.stringify(student)
      }
    </div>
  )
}

export default Ex59