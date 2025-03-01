import React from 'react'
import { useState } from 'react'

const Ex39 = () => {
    const [click, setClick] = useState({
        button_1 : 0,
        button_2 : 0,
        button_3 : 0,
        button_4 : 0,
        button_5 : 0
    })

    const handleClick = (key)=>{
        setClick({
            ...click,
            [key]: click[key] + 1
        })
    }

    return (
        <div>
            <div className='p-16 space-x-6'>
                <button className='bg-rose-600 text-white rounded px-8 py-2.5' onClick={()=>handleClick("button_1")}>Button 1</button>
                <button className='bg-indigo-600 text-white rounded px-8 py-2.5' onClick={()=>handleClick("button_2")}>Button 2</button>
                <button className='bg-amber-600 text-white rounded px-8 py-2.5' onClick={()=>handleClick("button_3")}>Button 3</button>
                <button className='bg-green-600 text-white rounded px-8 py-2.5' onClick={()=>handleClick("button_4")}>Button 4</button>
                <button className='bg-zinc-600 text-white rounded px-8 py-2.5' onClick={()=>handleClick("button_5")}>Button 5</button>
            </div>
            <div className='p-16'>
                <h1 className='text-lg font-medium'>Button 1 click : {click.button_1}</h1>
                <h1 className='text-lg font-medium'>Button 2 click : {click.button_2}</h1>
                <h1 className='text-lg font-medium'>Button 3 click : {click.button_3}</h1>
                <h1 className='text-lg font-medium'>Button 4 click : {click.button_4}</h1>
                <h1 className='text-lg font-medium'>Button 5 click : {click.button_5}</h1>
            </div>
        </div>
    )
}

export default Ex39