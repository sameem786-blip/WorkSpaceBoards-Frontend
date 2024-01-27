import React from 'react'
import "./authForm.css";
import AuthInput from "../AuthInput/AuthInput"

const AuthForm = ({login}) => {
  return (
      <div className='authform-container'>
          <AuthInput content="email"/>
          <AuthInput />
    </div>
  )
}

export default AuthForm