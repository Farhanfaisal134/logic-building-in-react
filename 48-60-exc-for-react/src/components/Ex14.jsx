import React from 'react'
import { useState } from 'react'

const Ex14 = () => {
    const [limit, setLimit] = useState(0)

    const handleChange = (e)=>{
        const l = e.target.value
        setLimit(l)
    }

    return (
        <div>
            <input type="number" placeholder='Enter text limit' onChange={handleChange} />
            <br />
            <br />
            <textarea rows={5} placeholder='Your text goes here' maxLength={limit} />
        </div>
    )
}

export default Ex14