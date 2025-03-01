import React from 'react'
import { useState } from 'react'

const Ex25 = () => {
    const [values, setValue] = useState("")

    const handleChange = (e)=>{
        setValue(e.target.value)
    }

    return (
        <div>
            <input onChange={handleChange} />
            <h1>{values.toUpperCase()}</h1>
        </div>
    )
}

export default Ex25