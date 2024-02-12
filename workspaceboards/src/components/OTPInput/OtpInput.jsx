import React from 'react'
import "./otpInput.css"

const OtpInput = () => {
  return (
    <div className='otp-container'>
      <div className="otp-input-row">
        <input className='otp-input'></input>
        <input className='otp-input'></input>
        <input className='otp-input'></input>
        <input className='otp-input'></input>
      </div>
    </div>
  )
}

export default OtpInput