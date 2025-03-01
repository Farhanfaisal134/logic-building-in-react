import React, { useState } from 'react'

const Ex2 = () => {
  const [text, setText] = useState("show")

  const changeText = ()=>{
    setText(text === "show" ? "hide" : "show")
  }

  return (
    <div>
      <button onClick={changeText}>{text}</button>
    </div>
  )
}

export default Ex2