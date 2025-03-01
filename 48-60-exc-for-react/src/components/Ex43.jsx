import React from 'react'
import { useState } from 'react'

const Ex43 = () => {
    const [user, setUser] =  useState({
        name: "er saurav",
        roll: 1,
        class: 2,
        subject: "maths"
    })


    const handleChange = (e)=>{
        setUser({
            ...user,
            subject: e.target.value
        })
    }

    return (
        <div>
            <h1>Name: {user.name}</h1>
            <h1>ROll: {user.roll}</h1>
            <h1>Class: {user.class}</h1>
            <h1>Subject: {user.subject}</h1>
            <input onChange={handleChange} className='border p-3' placeholder='enter subject' />
        </div>
    )
}

export default Ex43