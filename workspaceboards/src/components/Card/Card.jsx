import React from 'react'
import "./card.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';

const Card = () => {
  return (
      <div className='card-container'>
          <div className="car-title">Card Container Title</div>
          <div className="card-icons-container">
              <VisibilityIcon className='class-icon'/>3
              <CommentIcon className='class-icon'/>3
              <CrisisAlertIcon className='class-icon important'/>
          </div>
    </div>
  )
}

export default Card