import React from 'react'
import { useState } from 'react'

const Ex18 = () => {
    const [height, setHeight] = useState(5)

    const handleChange = (e)=>{
        setHeight(e.target.value)
    }

    return (
        <div>
            <input type="number" placeholder='Enter text area height' onChange={handleChange} />
            <br />
            <br />
            <textarea rows={height} />
        </div>
    )
}

export default Ex18