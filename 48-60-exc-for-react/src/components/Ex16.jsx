import React from 'react'
import { useState } from 'react'

const Ex16 = () => {
    const [color, setColor] = useState("#ccc")
    return (
        <div>
            <div style={{
                background: color,
                height: '100vh'
            }}>
                <button style={{margin: 24}} onClick={()=>setColor(color === "#ccc" ? "oklch(0.147 0.004 49.25)" : "#ccc")}>
                    { color === "#ccc" ? "Dark Mode" : "Light Mode" }
                </button>
            </div>
        </div>
    )
}

export default Ex16