import React from 'react'
import { useState } from 'react'

const Ex11 = () => {
    const [show, setShow] = useState(true)

    return (
        <div>
            {
                show &&
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et deserunt non quod tempore minus sunt. Est perspiciatis, explicabo repudiandae voluptatibus accusamus saepe debitis maxime eligendi omnis repellendus animi! Sapiente!</p>
            }
            <button onClick={()=>setShow(!show)}>Toggle Paragraph</button>
        </div>
    )
}

export default Ex11