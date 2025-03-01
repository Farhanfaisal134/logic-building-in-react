import React from 'react'
import { useState } from 'react'

const Ex44 = () => {
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        mobile: '',
        address: ''
    })

    const handleChange = (e)=>{
        const input = e.target
        const key = input.name
        const value = input.value
        setForm({
            ...form,
            [key]: value
        })
    }

    const signup = (e)=>{
        e.preventDefault()
        console.log(form)
    }
  return (
    <div>
        <form onSubmit={signup}>
            <input onChange={handleChange} name="fullname" placeholder='Fullname' className='p-3 rounded border' />
            <input onChange={handleChange} name="email" placeholder='Email' className='p-3 rounded border' />
            <input onChange={handleChange} name="mobile" placeholder='Mobile' className='p-3 rounded border' />
            <input onChange={handleChange} name="address" placeholder='Address' className='p-3 rounded border' />
            <button className='bg-blue-600 p-3 text-white rounded'>Submit</button>
        </form>
    </div>
  )
}

export default Ex44