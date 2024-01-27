import React from 'react'
import "./authInput.css"
import ForwardIcon from '@mui/icons-material/Forward';

const AuthInput = ({content}) => {
  return (
   <div className="outer-input-container">
              <div className="inner-input-column-container">
              <div className="input-label-container">{content === "email" ? (<label>Email Address</label>) : (<label>Password</label>)}</div>
                  <div className="inner-input-row-container">
                      <div className="green-arrow-container"><ForwardIcon className='arrow-icon' id="arrow-icon" /> </div>
                      <div className='input-container'><input className='input'></input></div>
                  </div>
            </div>
          </div>
  )
}

export default AuthInput