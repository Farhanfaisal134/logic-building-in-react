import React from 'react'
import { useState } from 'react'

const Ex3 = () => {
    const [counter, setCounter] = useState(1)

    const increment = ()=>{
        setCounter(counter + 1)
    }

    const decrement = ()=>{
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>Conter : {counter}</h1>
            <button onClick={increment}>+ Increment</button>
            <br />
            <br />
            <button onClick={decrement}>- Decrement</button>
        </div>
    )
}

export default Ex3