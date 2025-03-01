import React, { useState } from 'react'

const Ex1 = () => {
  const [show, setShow] = useState(true)

  return (
    <div>
      {
        show &&
        <img src="/demo.jpg" width="720" />
      }
      <br />
      <br />
      <button onClick={() => setShow(!show)}>click me</button>
    </div>
  )
}

export default Ex1;