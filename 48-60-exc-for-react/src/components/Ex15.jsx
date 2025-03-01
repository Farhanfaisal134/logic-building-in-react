import React from 'react'
import { useState } from 'react'

const Ex15 = () => {
    const [value, setValue] = useState("")

    const handleChange = (e)=>{
        setValue(e.target.value)
    }

    const changeDocumentTitle = ()=>{
        document.title = value
    }

    return (
        <div>
            <input placeholder='Enter title' onChange={handleChange} />
            <br />
            <br />
            <button onClick={changeDocumentTitle}>Change document title</button>
        </div>
    )
}

export default Ex15