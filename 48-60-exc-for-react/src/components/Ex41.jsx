import React, { useEffect, useState } from 'react'

const Ex41 = () => {
    const [scroll,setScroll] = useState({
        x: 0,
        y: 0
    })

    useEffect(()=>{
        window.onscroll = (e)=>{
            setScroll({
                x: Math.round(window.scrollX),
                y: Math.round(window.scrollY)
            })
        }
    }, [])

    return (
        <div className='h-[5000px] w-[5000px]'>
            <div className='bg-red-500 text-white p-3 fixed top-0 left-0'>
                <h1 className='text-xl font-medium'>Scrolled x value : {scroll.x}</h1>
                <h1 className='text-xl font-medium'>Scrolled y value : {scroll.y}</h1>
            </div>
        </div>
    )
}

export default Ex41