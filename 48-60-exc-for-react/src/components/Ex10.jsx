import React from 'react'
import { useState } from 'react'

const Ex10 = () => {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        const input = e.target
        setValue(input.value)
    }

    const createAcount = (e) => {
        e.preventDefault()
        console.log(value)
    }

    return (
        <div>
            <form onSubmit={createAcount}>
                <input onChange={handleChange} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Ex10