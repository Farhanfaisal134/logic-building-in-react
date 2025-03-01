import React from 'react'
import { useState } from 'react'

const Ex24 = () => {
    const [count, setCount] = useState(0)

    const handleChange = ()=>{
        setCount(count+1)
    }

    return (
        <div>
            <input onKeyDown={handleChange} />
            <h1>Key Pressed {count} Times</h1>
        </div>
    )
}

export default Ex24