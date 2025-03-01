import React from 'react'
import { useState } from 'react'

const Ex6 = () => {
    const [type, setType] = useState("password")

    const togglePassword = () => {
        setType(type === "password" ? "text" : "password")
    }

    return (
        <div>
            <input type={type} />
            <br />
            <br />
            <button onClick={togglePassword}>Toggle password</button>
        </div>
    )
}

export default Ex6