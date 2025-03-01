import React from 'react'
import { useState } from 'react'

const Ex35 = () => {
    const [size, setSize] = useState({
        width: 200,
        height: 200
    })

    const handleChange = (e)=>{
        const input = e.target
        const key = input.name
        const value = input.value
        setSize({
            ...size,
            [key]: Number(value)
        })
    }

    return (
        <div>
            <input onChange={handleChange} name="width" type="number" placeholder='Width' className='border p-3 rounded'/>
            <input onChange={handleChange} name="height" type="number" placeholder='height' className='border p-3 rounded' />
            <div style={{
                width: size.width,
                height: size.height,
                border: '1px solid #ccc',
                background: 'red'
            }}></div>
        </div>
    )
}

export default Ex35