import React from 'react'
import { useState } from 'react'

const Ex52 = () => {
    const [form, setForm] = useState({
        fullname: '',
        email: ''
    })

    const [error, setError] = useState({
        fullname: null,
        email: null
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

    const validateRequired = (value)=>{
        if(value.length)
            return null

        return "This field is required"
    }

    const signup = (e)=>{
        e.preventDefault()
        setError({
            fullname: validateRequired(form.fullname),
            email: validateRequired(form.email)
        })
    }

    return (
        <div>
            <form className='flex flex-col w-[350px] mx-auto mt-24 gap-4' onSubmit={signup}>
                <div className='flex flex-col'>
                    <label>Fullname</label>
                    <input name="fullname" className='border p-3 rounded' onChange={handleChange} />
                    { error.fullname && <label className='text-rose-600 font-medium'>{error.fullname}</label> }
                </div>

                <div className='flex flex-col'>
                    <label>Email</label>
                    <input name="email" className='border p-3 rounded' onChange={handleChange} />
                    { error.email && <label className='text-rose-600 font-medium'>{error.email}</label> }
                </div>

                <button className='p-3 rounded bg-rose-600 text-white'>Submit</button>
            </form>
        </div>
    )
}

export default Ex52