import React, { useState } from 'react'

const Ex56 = () => {
    const [counter, setCounter] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0
    })

    const increaseCounter = (key)=>{
        setCounter({
            ...counter,
            [key]: counter[key] + 1
        })
    }

    const decreaseCounter = (key)=>{
        setCounter({
            ...counter,
            [key]: counter[key] - 1
        })
    }
    

  return (
    <div className='bg-gray-200 p-12 h-screen grid grid-cols-3 gap-12'>
        <div className='bg-white rounded-lg p-6 h-fit'>
            <h1 className='text-6xl font-bold mb-8'>{counter.counter1}</h1>
            <div className='flex gap-3'>
                <button onClick={()=>decreaseCounter("counter1")} className='w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-blue-600 font-bold text-white'>
                    <i className='ri-subtract-line'></i>
                </button>
                <button onClick={()=>increaseCounter("counter1")} className='w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-rose-600 font-bold text-white'>
                    <i className='ri-add-line'></i>
                </button>
            </div>
        </div>

        <div className='bg-white rounded-lg p-6 h-fit'>
            <h1 className='text-6xl font-bold mb-8'>{counter.counter2}</h1>
            <div className='flex gap-3'>
                <button onClick={()=>decreaseCounter("counter2")} className='w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-blue-600 font-bold text-white'>
                    <i className='ri-subtract-line'></i>
                </button>
                <button onClick={()=>increaseCounter("counter2")} className='w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-rose-600 font-bold text-white'>
                    <i className='ri-add-line'></i>
                </button>
            </div>
        </div>

        <div className='bg-white rounded-lg p-6 h-fit'>
            <h1 className='text-6xl font-bold mb-8'>{counter.counter3}</h1>
            <div className='flex gap-3'>
                <button onClick={()=>decreaseCounter("counter3")} className='w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-blue-600 font-bold text-white'>
                    <i className='ri-subtract-line'></i>
                </button>
                <button onClick={()=>increaseCounter("counter3")} className='w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-rose-600 font-bold text-white'>
                    <i className='ri-add-line'></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Ex56