import React from 'react'
import { useState } from 'react'

const Ex55 = () => {
    const [ui, setUi] = useState({
        switch1: 'off',
        switch2: 'off',
        switch3: 'off'
    })

    const handleChange = (e)=>{
        const input = e.target
        const key = input.name
        const checked = input.checked
        setUi({
            ...ui,
            [key]: checked ? "On" : "Off"
        })
    }

  return (
    <div className='p-12 flex gap-12'>
        <div>
            <label class="switch">
                <input type="checkbox" name="switch1" onChange={handleChange} />
                <span className="slider">{ui.switch1}</span>
            </label>
            <label>{ui.switch1}</label>
        </div>

        <div>
            <label class="switch">
                <input type="checkbox" name="switch2" onChange={handleChange} />
                <span className="slider">{ui.switch2}</span>
                <p>{ui.switch2}</p>
            </label>
        </div>

        <div>
            <label class="switch">
                <input type="checkbox" name="switch3" onChange={handleChange} />
                <span className="slider">{ui.switch3}</span>
                <p>{ui.switch3}</p>
            </label>
        </div>
    </div>
  )
}

export default Ex55