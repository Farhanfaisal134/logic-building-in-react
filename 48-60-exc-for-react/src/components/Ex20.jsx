import React from 'react'
import { useState } from 'react'

const Ex20 = () => {
    const [length, setLength] = useState(0)

    const handleChange = (e)=>{
        const v = e.target.value
        setLength(v.length)
    }

    return (
        <div>
            <input onChange={handleChange} />
            <h1>Characters - {length}</h1>
        </div>
    )
}

export default Ex20