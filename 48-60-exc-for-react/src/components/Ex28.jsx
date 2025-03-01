import React, { useState } from 'react'

const Ex28 = () => {
    const [value, setValue] = useState("")

    const handleChange = (e)=>{
        setValue(e.target.value)
    }

    return (
        <div>
            <input value={value} onChange={handleChange}/>
            <br />
            <br />
            <button onClick={()=>setValue("")}>Reset</button>
        </div>
    )
}

export default Ex28