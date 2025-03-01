import React, { useState } from 'react'

const Ex7 = () => {
  const [disable, setDisable] = useState(false)

  return (
    <div>
      <button disabled={disable} onClick={() => setDisable(true)}>Click to disable me</button>
    </div>
  )
}

export default Ex7