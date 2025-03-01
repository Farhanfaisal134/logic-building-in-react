import React from 'react'
import { useState } from 'react'

const Ex53 = () => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        gender: ''
    })

    const handleChange = (e)=>{
        const input = e.target
        const key = input.name
        const value = input.value
        setUser({
            ...user,
            [key]: value
        })
    }

  return (
    <div>
        <form>
            <input onChange={handleChange} name="name" className='border rounded' placeholder='Name' />
            <input onChange={handleChange} name="age" className='border rounded' placeholder='Age' />
            <select onChange={handleChange} name="gender" className='border rounded' placeholder='Choose Gender'>
                <option>male</option>
                <option>female</option>
            </select>
        </form>
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <h1>Gender: {user.gender}</h1>
    </div>
  )
}

export default Ex53