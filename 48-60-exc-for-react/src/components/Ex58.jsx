import React from 'react'
import { useState } from 'react'

const Ex58 = () => {
    const [form, setForm] = useState({
        fullname: '',
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

    const resetField = (field)=>{
        setForm({
            ...form,
            [field]: ''
        })
    }

  return (
    <div>
        <form>
            <input onChange={handleChange} value={form.fullname} name="fullname" placeholder='Fullname' className='border p-3 rounded' />
            <input onChange={handleChange} value={form.email} name="email" placeholder='Email' className='border p-3 rounded' />
            <input onChange={handleChange} value={form.password} name="password" placeholder='Password' className='border p-3 rounded' />
            <button>submit</button>
            <button type="button" onClick={()=>resetField("password")}>Reset</button>
        </form>
    </div>
  )
}

export default Ex58