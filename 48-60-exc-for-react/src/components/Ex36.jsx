import React from 'react'
import { useState } from 'react'

const Ex36 = () => {
    const light = {
        background: '#f5f5f5',
        color: '#000000'
    }

    const dark = {
        background: '#1a1a1a',
        color: '#ffffff'
    }

    const [theme, setTheme] = useState("dark")


    return (
        <div style={theme === "dark" ? dark : light} className='h-screen'>
            <button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")} className='m-24'>
                {theme} Mode
            </button>
        </div>
    )
}

export default Ex36