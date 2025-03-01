import React from 'react'
import { useState } from 'react'

const Ex22 = () => {
    const [checked, setChecked] = useState(false)

    const handleChange = (e)=>{
        setChecked(e.target.checked)
    }

    return (
        <div>
            <h1>
                {checked ? "Checked" : "Unchecked"}
            </h1>
            <input type="checkbox" onChange={handleChange} />
        </div>
    )
}

export default Ex22