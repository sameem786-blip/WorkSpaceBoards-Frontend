import React from 'react'
import "./authForm.css"

const AuthForm = ({login}) => {
  return (
      <div className='authform-container'>
          <div className="email-input-container">
              <div className="email-input-column-container">
                  <div className="email-label"></div>
                  <div className="email-input-row-container">
                      <div className="green-arrow-container"></div>
                      <div className='input-container'></div>
                  </div>
            </div>
          </div>
    </div>
  )
}

export default AuthForm