import React from 'react'
import { useState } from 'react'

const Ex38 = () => {
    const [user, setUser] = useState({
        image: '',
        email: '',
        name: '',
        role: ''
    })

    const handleChange = (e)=>{
        const input = e.target
        const key = input.name
        const value = (key === "image" ? URL.createObjectURL(input.files[0]) : input.value)
        setUser({
            ...user,
            [key]: value
        })
    }
    
    return (
        <div className='bg-gray-200 h-screen'>
            <div className='w-7/12 mx-auto grid grid-cols-2 gap-12 py-12'>
                <div className='bg-white rounded-lg p-6'>
                    <h1 className='text-xl font-semibold'>Add Info</h1>
                    <form className='mt-3 flex flex-col gap-4'>
                        <input onChange={handleChange} name='image' type='file' className='bg-slate-200 p-2 rounded' accept='image/*'/>
                        <input onChange={handleChange} name='name' className='border border-slate-200 p-2 rounded' placeholder='Enter your name' />
                        <input onChange={handleChange} name='email' className='border border-slate-200 p-2 rounded' placeholder='Your email' />
                        <input onChange={handleChange} name='role' className='border border-slate-200 p-2 rounded' placeholder='Developer' />
                    </form>
                </div> 
                <div className='bg-white rounded-lg p-6 flex flex-col items-center gap-1'>
                    <img 
                        className='w-[100px] h-[100px]'
                        src={user.image}
                    />
                    <h1 className='text-2xl font-semibold'>{user.name}</h1>
                    <p className='text-gray-500'>{user.email}</p>
                    <p className='text-gray-500 text-xs'>{user.role}</p>
                </div> 
            </div>
        </div>
    )
}

export default Ex38