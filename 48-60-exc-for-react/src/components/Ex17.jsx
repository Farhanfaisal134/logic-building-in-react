import React from 'react'
import { useState } from 'react'

const Ex17 = () => {
    const [value, setValue] = useState("")

    const handleChange = (e)=>{
        setValue(e.target.value)
    }

    return (
        <div>
            <select onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <h1>{value}</h1>
        </div>
    )
}

export default Ex17