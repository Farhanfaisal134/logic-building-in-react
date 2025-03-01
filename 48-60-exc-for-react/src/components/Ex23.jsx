import React, { useState } from 'react'

const Ex23 = () => {
    const [like, setLike] = useState(true)

    return (
        <div>
            <button onClick={()=>setLike(!like)}>
                {
                    like ?
                    <i className="ri-thumb-up-line"></i>
                    :
                    <i className="ri-thumb-down-line"></i>

                }
                <lable>
                    {like ? "Like" : "Dislike"}
                </lable>
            </button>
        </div>
    )
}

export default Ex23