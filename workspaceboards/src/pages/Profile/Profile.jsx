import React from 'react'
import "./profile.css"

import Hellboy from '../../components/Hellboy/Hellboy'
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className="profileCard">
        <div className="left-section">
          <Hellboy />
        </div>
        <div className="right-section">
          <img src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?resize=1000x750&vertical=center" className='display-picture' />
            <div className="text-row">
              <p className='text-row-entry'>@username: `<span className='text-light'>changazi786</span>`</p><BorderColorIcon className='edit-icon'/>
            </div>
            <div className="text-row">
              <p className='text-row-entry'>First-name: `<span className='text-light'>changazi786</span>`</p>
            </div>
            <div className="text-row">
              <p className='text-row-entry'>Last-name: `<span className='text-light'>changazi786</span>`</p>
            </div>
            <div className="text-row">
              <p className='text-row-entry'>Email: `<span className='text-light'>changazi786</span>`</p>
            </div>
            <div className="text-row">
              <button className="profile-action">Reset Password</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile