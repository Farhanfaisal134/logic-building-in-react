import React from 'react'
import { useState } from 'react'

const Ex19 = () => {
    const [random, setRandom] = useState(0)

    const generateRandom = ()=>{
        const num = Math.floor(Math.random() * 15000)
        setRandom(num)
    }

    return (
        <div>
            <button onClick={generateRandom}>Get Random</button>
            <h1>Random - {random}</h1>
        </div>
    )
}

export default Ex19