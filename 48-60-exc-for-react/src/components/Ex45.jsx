import React from 'react'
import { useState } from 'react'

const Ex45 = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        remember: ''
    })

    const handleChange = (e)=>{
        const input = e.target
        const key = input.name
        const value = (key === "remember" ? input.checked : input.value)
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
            <input onChange={handleChange} name="email" placeholder='Email' className='p-3 rounded border' />
            <input onChange={handleChange} name="password" type="password" placeholder='******' className='p-3 rounded border' />
            <div>
                <input name="remember" type="checkbox" onChange={handleChange} />
                <label>Remember Me</label>
            </div>
            <button className='bg-blue-600 p-3 text-white rounded'>Login</button>
        </form>
        <h1>Email: {form.email}</h1>
        <h1>Password: {form.password}</h1>
        <h1>Remember: {form.remember.toString()}</h1>
    </div>
  )
}

export default Ex45