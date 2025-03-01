import React from 'react'
import { useState, useEffect } from 'react'

const getTime = ()=>{
    return new Date().toLocaleTimeString()
}

const Ex21 = () => {
    const t = getTime()
    const [time, setTime] = useState(t)

    useEffect(()=>{
        const interval = setInterval(()=>{
            const newTime = getTime()
            setTime(newTime)
        }, 1000)

        // Cleanup
        return ()=>{
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

export default Ex21