import React, { useState } from 'react'

const Ex33 = () => {
    const [form, setForm] = useState({
        username: '',
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

    const login = (e)=>{
        e.preventDefault()
        console.log(form)
    }

    return (
        <div>
            <form className='flex flex-col gap-6 mx-auto mt-24 w-[300px]' onSubmit={login}>
                <input  onChange={handleChange} placeholder='Username' name="username" className='border border-gray-300 rounded p-3' />
                <input onChange={handleChange} placeholder='Password' type="password" name="password" className='border border-gray-300 rounded p-3' />
                <button className='bg-blue-600 text-white p-3 rounded'>Login</button>
            </form>
        </div>
    )
}

export default Ex33