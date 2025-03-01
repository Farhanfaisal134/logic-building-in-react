import React, { useState } from 'react'

const Ex42 = () => {
    const [color, setColor] = useState({
        r: 0,
        g: 0,
        b: 0
    })

    const handleChange = (e)=>{
        const input = e.target
        const key = input.name
        const value = input.value
        setColor({
            ...color,
            [key]: value > 255 ? 255 : value
        })
    }
    
    return (
        <div className='w-[350px] h-[350px] m-24 rounded-lg flex items-center justify-center flex-col gap-4' style={{
            background: `rgb(${color.r}, ${color.g}, ${color.b})`
        }}>
            <input type="number" onChange={handleChange} className='border border-gray-300 rounded p-3 bg-white' placeholder='R - Red' name="r" />
            <input type="number" onChange={handleChange} className='border border-gray-300 rounded p-3 bg-white' placeholder='G - Green' name="g" />
            <input type="number" onChange={handleChange} className='border border-gray-300 rounded p-3 bg-white' placeholder='B - Blue' name="b" />
        </div>
    )
}

export default Ex42