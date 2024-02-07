import {useContext, useState} from 'react'
import { AuthContext } from "../../context/authContext";
import "./profile.css"

import Hellboy from '../../components/Hellboy/Hellboy'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AuthInput from '../../components/AuthInput/AuthInput';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [ editProfile, setEditProfile ] = useState(false)
  const [ edit, setEdit ] = useState("")
  const [ newUsername, setNewUsername ] = useState("")
  const [ newFirstname, setNewFirstname ] = useState("")
  const [ newLastname, setNewLastname ] = useState("")
  
  const handleEditProfileClick = (edit) => {
    setEditProfile(true);

    console.log(edit)
    setEdit(edit)
    console.log(editProfile)
  }

  const handleNewChange = (e) => {
    if (edit == "Username") {
      e.preventDefault();
      setNewUsername(e.target.value)
    }
    else if (edit == "First Name") {
      e.preventDefault();
      setNewFirstname(e.target.value)
    }
    else if (edit == "Last Name") {
      e.preventDefault();
      setNewLastname(e.target.value)
    } else {
    }
  }
  return (
    <div className='profile-container'>
      <div className="profileCard">
        <div className="left-section">
          <Hellboy />
        </div>
        {editProfile ? (
          <div className="right-section">
            <img src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?resize=1000x750&vertical=center" className='display-picture' />
            <div className="text-row">
            <p className='text-row-entry'>@username: `<span className='text-light'>{currentUser.user.username}</span>`</p>
            </div>
            <div className="text-row">
              <AuthInput content={edit == "Username" ? ("New Username") : (edit == "FirstName" ? ("New First Name") : ("New Last Name") )} callback={ handleNewChange} />
            </div>
            <div className="text-row">
              <button className="profile-action">Update {edit }</button>
            </div>
          </div>
        ) : (
          <div className="right-section">
          <img src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?resize=1000x750&vertical=center" className='display-picture' />
            <div className="text-row">
            <p className='text-row-entry'>@username: `<span className='text-light'>{currentUser.user.username}</span>`</p><BorderColorIcon onClick={() => handleEditProfileClick("Username")} className='edit-icon'/>
            </div>
            <div className="text-row">
              <p className='text-row-entry'>Email: `<span className='text-light'>{currentUser.user.email}</span>`</p>
            </div>
            <div className="text-row">
            <p className='text-row-entry'>First-name: `<span className='text-light'>{currentUser.user.firstName}</span>`</p><BorderColorIcon onClick={() => handleEditProfileClick("First Name")} className='edit-icon'/>
            </div>
            <div className="text-row">
              <p className='text-row-entry'>Last-name: `<span className='text-light'>{currentUser.user.lastName}</span>`</p><BorderColorIcon onClick={() => handleEditProfileClick("Last Name")} className='edit-icon'/>
            </div>
            <div className="text-row">
              <button className="profile-action">Reset Password</button>
            </div>
        </div>  
        )}
        
      </div>
    </div>
  )
}

export default Profile