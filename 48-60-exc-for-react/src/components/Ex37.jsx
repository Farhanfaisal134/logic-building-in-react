import React, { useState } from 'react'

const Ex37 = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
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

  return (
    <div>
        <form>
            <input onChange={handleChange} type='email' placeholder='Email' name="email"className='p-3 border rounded' />
            <input onChange={handleChange} type='password' placeholder='Password' name="password" className='p-3 border rounded' />
        </form>

        <h1>Email: {form.email}</h1>
        <h1>Password: {form.password}</h1>
    </div>
  )
}

export default Ex37