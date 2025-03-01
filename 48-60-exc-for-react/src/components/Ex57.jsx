import React, { useEffect, useState } from 'react'

const Ex57 = () => {
    const light = {
        background: '#f5f5f5',
        color: 'black'
    }

    const dark = {
        background: '#323232',
        color: 'white'
    }

    const [theme, setTheme] = useState("light")

    useEffect(()=>{
        const persistTheme = localStorage.getItem("theme")
        if(!persistTheme)
        {
            localStorage.setItem("theme", "light")
        }
        else {
            setTheme(persistTheme)
        }
    }, [])

    const handleTheme = ()=>{
        const persistTheme = localStorage.getItem("theme")
        if(persistTheme === "light")
        {
            localStorage.setItem("theme", "dark")
            setTheme("dark")
        }
        else {
            localStorage.setItem("theme", "light")
            setTheme("light")
        }
    }

    return (
        <div
            style={theme === "light" ? light : dark}
            className='h-screen'
        >
            <button onClick={handleTheme}>Toggle Theme</button>
        </div>
    )
}

export default Ex57