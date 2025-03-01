import React from 'react'
import { useState } from 'react'

const Ex30 = () => {
    const [isOtpSent, setIsOtpSent] = useState(false)

    const Mobile = ()=>{
        return (
            <div>
                <h1>Enter mobile number</h1>
                <input />
                <button onClick={()=>setIsOtpSent(true)}>Send</button>
            </div>
        )
    }

    const Otp = ()=>{
        return (
            <div>
                <h1>OTP Details</h1>
                <input />
                <button onClick={()=>setIsOtpSent(false)}>Verify</button>
            </div>
        )
    }

    return (
        <div>
            {
                isOtpSent ? <Otp /> : <Mobile />
            }
        </div>
    )
}

export default Ex30