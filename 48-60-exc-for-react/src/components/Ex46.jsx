import React from 'react'
import { useState } from 'react'

const Ex46 = () => {
    const [user, setUser] = useState({role: 'manager'})
  return (
    <div>

        <h1>Roles - {user.role}</h1>
        <select className='border p-3' onChange={(e)=>setUser({role: e.target.value})}>
            <option value="fullstack-developer">Fullstack Developer</option>
            <option value="manager">Manager</option>
            <option value="support">Support</option>
        </select>
    </div>
  )
}

export default Ex46