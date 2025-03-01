import React from 'react'
import { useState } from 'react'

const Ex5 = () => {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        const input = e.target
        const v = input.value
        setValue(v)
    }

    return (
        <div>
            <input onChange={handleChange} />
            <h1>{value}</h1>
        </div>
    )
}

export default Ex5