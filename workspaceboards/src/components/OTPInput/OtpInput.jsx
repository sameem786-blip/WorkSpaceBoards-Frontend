import React, {useState} from 'react'
import "./otpInput.css"

const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']); // Array to store individual digits

  const handleChange = (index, event) => {
    const newOtp = [...otp]; // Create a copy of the state array
    newOtp[index] = event.target.value; // Update the digit at the specified index
    setOtp(newOtp);

    // Automatically focus on the next input field or submit if all digits are entered
    if (event.target.value.length === 1) {
      const nextIndex = index + 1;
      if (nextIndex < 4) {
        const nextInput = document.getElementById(`otp-${nextIndex}`);
        nextInput.focus();
      } else {
        // Submit form or perform your validation logic here
        console.log('Full OTP entered:', otp.join(''));
      }
    }
  };

  return (
    <div className='otp-container'>
      <div className='otp-msg'>
        <p className='otp-label'>
          A 4-digit OTP has been sent to your email. Enter it below to complete the verification process and move ahead.
        </p>
      </div>
      <div className="otp-input-row">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index + 1}`} // Ensure unique IDs for accessibility
            className='otp-input'
            type="number"
            maxLength="1"
            min="0"
            max="9"
            step="1"
            value={digit} // Set correct initial value from state
            onChange={(event) => handleChange(index, event)}
            pattern="[0-9]" // Enforce number input
            autoCorrect="off" // Prevent autocorrection issues
            autoComplete="off" // Prevent browser suggestions
            autoFocus={index === 0} // Focus on the first input initially
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput