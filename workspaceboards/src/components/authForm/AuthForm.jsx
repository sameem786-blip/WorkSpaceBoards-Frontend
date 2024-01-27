import React from 'react'
import "./authForm.css";
import AuthInput from "../AuthInput/AuthInput"
import ForwardIcon from '@mui/icons-material/Forward';

const AuthForm = ({login}) => {
  return (
      <div className='authform-container'>
          <AuthInput content="email"/>
          <AuthInput />
          <div className="btn-container">
              <div className="btn-row">
                  <div className="green-arrow-container"><ForwardIcon className='arrow-icon' /></div>
                    <button className='btn'>Submit</button>
              </div>
          </div>
    </div>
  )
}

export default AuthForm