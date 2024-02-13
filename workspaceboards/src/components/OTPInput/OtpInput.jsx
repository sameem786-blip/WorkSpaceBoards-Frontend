import React,{useState} from 'react'
import "./otpInput.css"

const OtpInput = () => {
  const [otp1, setOtp1] = useState("")
  const [otp2, setOtp2] = useState("")
  const [otp3, setOtp3] = useState("")
  const [otp4, setOtp4] = useState("")

  const handleOtpInput = async (e) => {
    if (e.target.name == "otp1") {
      setOtp1(e.target.value)
    } else if (e.target.name == "otp2") {
      setOtp2(e.target.value)
    }
    else if (e.target.name == "otp3") {
      setOtp3(e.target.value)
    }
    else {
      setOtp4(e.target.value)
    }
  }
  return (
    <div className='otp-container'>
      <div className='otp-msg'>
        <p className='otp-label'>A 4 digit otp has been sent to your email, enter it below to complete the verification process and move ahead.</p>
      </div>
      <div className="otp-input-row">
        <input className='otp-input' value={otp1} name="otp1" type="number" onChange={ handleOtpInput} maxlength="1" min="0" max="9" step="1"></input>
        <input className='otp-input' value={ otp1} name="otp2" type="number" onChange={ handleOtpInput} maxlength="1" min="0" max="9" step="1"></input>
        <input className='otp-input' value={ otp1} name="otp3" type="number"  onChange={ handleOtpInput} maxlength="1" min="0" max="9" step="1"></input>
        <input className='otp-input' value={ otp1} name="otp4" type="number" onChange={ handleOtpInput} maxlength="1" min="0" max="9" step="1"></input>
      </div>
    </div>
  )
}

export default OtpInput