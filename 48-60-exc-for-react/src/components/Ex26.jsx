import React, { useState } from 'react'

const Ex26 = () => {
    const [value, setValue] = useState("")
    const [result, setResult] = useState("")

    const handleChange = (e)=>{
        setValue(e.target.value)
    }


    return (
        <div>
            <input onChange={handleChange}/>
            <button onClick={()=>setResult(value)}>result</button>
            <h1>{result}</h1>
        </div>
    )
}

export default Ex26