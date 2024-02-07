import {useContext, useState} from 'react'
import { AuthContext } from "../../context/authContext";
import "./profile.css"
import axios from "axios";

import Hellboy from '../../components/Hellboy/Hellboy'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AuthInput from '../../components/AuthInput/AuthInput';

import { Link, useNavigate } from "react-router-dom";

import config from "../../config/config.json";

const serverURL = config.serverURL;

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [ editProfile, setEditProfile ] = useState(false)
  const [ edit, setEdit ] = useState("")
  const [ newUsername, setNewUsername ] = useState("")
  const [ newFirstname, setNewFirstname ] = useState("")
  const [ newLastname, setNewLastname ] = useState("")
  
  const [toChange, setToChange] = useState("");

  const navigate = useNavigate();
  
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
      return;
    }
  }

  const handleEntry = (e) => {
    setToChange(e.target.value)
  }

  const handleUpdateClick = async() => {
    try {
      let response
      if (edit == "Username") {
        response = await axios.put(`${serverURL}/api/user/updateUsername`, {
          username: toChange,
        },
          {headers: {
          Authorization: `Bearer ${currentUser.token}`,
        }}
        );

        currentUser.user.username = toChange
        setEditProfile(false)
      }
      else if (edit == "First Name") {
      response = await axios.put(`${serverURL}/api/user/updateFirstname`, {
          firstName: edit,
        });
      }
      else if (edit == "Last Name") {
response = await axios.put(`${serverURL}/api/user/updateLastname`, {
          lastName: edit,
        });
      } else {
        return;
      }
    } catch (err) {
      
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
            <div className="text-column">
              <label className='profile-input-label'>New {edit}</label>
              <input className='profile-input' value={toChange} onChange={handleEntry}></input>
            </div>
            <div className="text-row">
              <button className="profile-action" onClick={handleUpdateClick}>Update {edit }</button>
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