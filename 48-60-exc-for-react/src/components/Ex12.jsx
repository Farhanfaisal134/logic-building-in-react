import React from 'react'
import { useState } from 'react'

const Ex12 = () => {
    const [text, setText] = useState("CodingOtt")

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={()=>setText(text === "CodingOtt" ? "Er Saurav" : "CodingOtt")}>Change text</button>
        </div>
    )
}

export default Ex12