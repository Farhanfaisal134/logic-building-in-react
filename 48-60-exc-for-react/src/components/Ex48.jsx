import React from 'react'
import { useState } from 'react'

const Ex48 = () => {
    const [design, setDesign] = useState({
        borderColor: 'red',
        borderWidth: 3
    })

    const handleChange = (e)=>{
        const input = e.target
        const key = input.name
        const value = input.name === "borderWidth" ? Number(input.value) : input.value
        setDesign({
            ...design,
            [key]: value
        })
    }

  return (
    <div>
            <input onChange={handleChange} type="color" name="borderColor" />
            <input onChange={handleChange} name="borderWidth" placeholder='Enter border width' type="number" />
            <br />
            <br />
        <div style={{
           width: 300,
           height: 300,
           borderColor: design.borderColor,
           borderWidth: design.borderWidth
        }}></div>
    </div>
  )
}

export default Ex48