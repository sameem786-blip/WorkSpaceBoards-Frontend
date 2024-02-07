import {useContext, useState} from 'react'
import { AuthContext } from "../../context/authContext";
import "./profile.css"

import Hellboy from '../../components/Hellboy/Hellboy'
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [ editProfile, setEditProfile ] = useState(false)
  
  const handleEditProfileClick = (edit) => {
    setEditProfile(true);

    console.log(edit)
    console.log(editProfile)
  }
  return (
    <div className='profile-container'>
      <div className="profileCard">
        <div className="left-section">
          <Hellboy />
        </div>
        <div className="right-section">
          <img src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?resize=1000x750&vertical=center" className='display-picture' />
            <div className="text-row">
            <p className='text-row-entry'>@username: `<span className='text-light'>{currentUser.user.username}</span>`</p><BorderColorIcon onClick={() => handleEditProfileClick("username")} className='edit-icon'/>
            </div>
            <div className="text-row">
              <p className='text-row-entry'>Email: `<span className='text-light'>{currentUser.user.email}</span>`</p>
            </div>
            <div className="text-row">
            <p className='text-row-entry'>First-name: `<span className='text-light'>{currentUser.user.firstName}</span>`</p><BorderColorIcon onClick={() => handleEditProfileClick("firstName")} className='edit-icon'/>
            </div>
            <div className="text-row">
              <p className='text-row-entry'>Last-name: `<span className='text-light'>{currentUser.user.lastName}</span>`</p><BorderColorIcon onClick={() => handleEditProfileClick("lastName")} className='edit-icon'/>
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