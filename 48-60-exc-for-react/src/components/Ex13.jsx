import React, { useState } from 'react'

const Ex13 = () => {
    const [value, setValue] = useState("")

    const handleChange = (e)=>{
        const input = e.target
        setValue(input.value)
    }

    return (
        <div>
            <input value={value} onChange={handleChange}/>
            <button onClick={()=>setValue("")}>Clear</button>
        </div>
    )
}

export default Ex13