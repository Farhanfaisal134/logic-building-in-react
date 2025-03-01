import React from 'react'
import { useState } from 'react'

const Ex32 = () => {
    const [form, setForm] = useState({
        firstname: '',
        lastname: ''
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
            <form onSubmit={signup} className='flex flex-col gap-6 mx-auto mt-24 w-[300px]'>
                <input onChange={handleChange} placeholder='Firstname' name="firstname" className='border border-gray-300 rounded p-3' />
                <input onChange={handleChange} placeholder='Lastname' name="lastname" className='border border-gray-300 rounded p-3' />
                <button className='bg-blue-600 text-white p-3 rounded'>Submit</button>
            </form>
            <h1>Firstname : {form.firstname}</h1>
            <h1>Lastname : {form.lastname}</h1>
        </div>
    )
}

export default Ex32