import React, { useState } from 'react'

const Ex4 = () => {
    const [enable, setEnable] = useState(false)

    return (
        <div>
            <h1>Enable and disable input typing</h1>
            <input readOnly={enable} />
            <br />
            <br />
            <button onClick={() => setEnable(!enable)}>
                {
                    enable ?
                        "Enable typing" : "Disable Typing"
                }
            </button>
        </div>
    )
}

export default Ex4