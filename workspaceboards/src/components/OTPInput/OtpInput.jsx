import React from 'react'
import "./otpInput.css"

const OtpInput = () => {
  return (
    <div className='otp-container'>
      <div className='otp-msg'>
        <p className='otp-label'>A 4 digit otp has been sent to your email, enter it below to complete the verification process and move ahead.</p>
      </div>
      <div className="otp-input-row">
        <input className='otp-input' type="number" maxlength="1" min="0" max="9" step="1"></input>
        <input className='otp-input'type="number" maxlength="1" min="0" max="9" step="1"></input>
        <input className='otp-input'type="number" maxlength="1" min="0" max="9" step="1"></input>
        <input className='otp-input'type="number" maxlength="1" min="0" max="9" step="1"></input>
      </div>
    </div>
  )
}

export default OtpInput