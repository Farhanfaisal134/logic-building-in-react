import React, { useState } from 'react'

const Ex47 = () => {
    const [user, setUser] = useState({
        firstname: 'er',
        lastname: '',
        dob: ''
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


    const signup = (e)=>{
        e.preventDefault()
        console.log(user)

        setTimeout(()=>{
            setUser({
                firstname: '',
                lastname: '',
                dob: ''
            })
        }, 5000)
    }

  return (
    <div>
        <form onSubmit={signup}>
            <input value={user.firstname} onChange={handleChange} name="firstname" className='border p-3 rounded' />
            <input value={user.lastname} onChange={handleChange} name="lastname" className='border p-3 rounded' />
            <input value={user.dob} onChange={handleChange} name="dob" type="date" className='border p-3 rounded' />
            <button className='bg-blue-600 text-white p-3 rounded'>submit</button>
        </form>
        <h1>Firstname: {user.firstname}</h1>
        <h1>Lastname: {user.lastname}</h1>
        <h1>Dob: {user.dob}</h1>
    </div>
  )
}

export default Ex47