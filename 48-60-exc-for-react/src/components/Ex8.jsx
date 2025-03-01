import React from 'react'
import { useState } from 'react'

const Ex8 = () => {
    const [clickCount, setClickCount] = useState(0)

    return (
        <div>
            <h1>Clicked - {clickCount}</h1>
            <button onClick={() => setClickCount(clickCount + 1)}>Click counter</button>
        </div>
    )
}

export default Ex8