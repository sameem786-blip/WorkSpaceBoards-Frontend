import React from 'react'
import "./authForm.css";
import ForwardIcon from '@mui/icons-material/Forward';

const AuthForm = ({login}) => {
  return (
      <div className='authform-container'>
          <div className="email-input-container">
              <div className="email-input-column-container">
                  <div className="email-label"><label>Email Address</label></div>
                  <div className="email-input-row-container">
                      <div className="green-arrow-container"><ForwardIcon className='arrow-icon' /> </div>
                      <div className='input-container'><input className='email-input'></input></div>
                  </div>
            </div>
          </div>
    </div>
  )
}

export default AuthForm