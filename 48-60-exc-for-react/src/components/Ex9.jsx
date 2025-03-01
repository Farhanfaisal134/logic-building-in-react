import React from 'react'
import { useState } from 'react'

const Ex9 = () => {
    const [color, setColor] = useState("inherit")
    
    return (
        <div>
            <h1 style={{color: color}}>CodingOtt Systems</h1>
            <button onClick={()=>setColor(color === "inherit" ? "red" : "inherit")}>Click me to change color</button>
        </div>
    )
}

export default Ex9