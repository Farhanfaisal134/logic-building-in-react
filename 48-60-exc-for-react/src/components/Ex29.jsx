import React from 'react'
import { useState } from 'react'

const Alert = ({message})=>{
    return (
        <div style={{
            width: 720,
            height: 60,
            background: 'red',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            borderRadius: 8
        }}>
            {message}
        </div>
    )
}

const Ex29 = () => {
    const [message, setMessage] = useState("Hello Good Morning !")
  return (
    <div>
        <Alert message={message} />
        <br />
        <br />
        <button onClick={()=>setMessage("Hello i am a developer")}>Change Message</button>
    </div>
  )
}

export default Ex29