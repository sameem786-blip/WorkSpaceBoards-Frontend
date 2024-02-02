import React from 'react'
import "./profile.css"

import Hellboy from '../../components/Hellboy/Hellboy'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className="hellboy-container">
        <div className="profileCard">
          
      <Hellboy />
        </div>

      </div>
      <div className="profile-inner-container">
        <div className="profileCard">

        </div>
      </div>
    </div>
  )
}

export default Profile