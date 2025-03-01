import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Ex51 = () => {
    const [key, setKey] = useState(null)

    useEffect(()=>{
        window.onkeydown = (e)=>{
            setKey(e.key)
        }
    }, [])

  return (
    <div className='bg-gray-100 flex items-center justify-center h-screen'>
        <h1 className='text-4xl font-semibold'>Press Any Key - {key}</h1>
    </div>
  )
}

export default Ex51