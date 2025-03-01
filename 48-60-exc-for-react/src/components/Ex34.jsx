import React from 'react'
import { useState } from 'react'

const Ex34 = () => {
    const [color, setColor] = useState('#000000')

    
    return (
        <div className='p-8'>
            <input type="color" onChange={(e)=>setColor(e.target.value)} />
            <div className='border w-[200px] h-[200px] flex items-center justify-center' style={{background: color}}>
                <h1>Color: {color}</h1>
            </div>
        </div>
    )
}

export default Ex34