import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const getDateTime = ()=>{
    return new Date().toLocaleTimeString()
}

const Ex27 = () => {
    const [time, setTime] = useState(getDateTime())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(getDateTime())
        }, 1000)

        // Cleanup function
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

export default Ex27