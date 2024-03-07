import React from 'react'
import "./card.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import LaunchIcon from '@mui/icons-material/Launch';

const Card = ({card}) => {
  return (
      <div className='card-cont'>
          <div className="car-title">{card.title}</div>
          <div className="card-icons-container">
              <VisibilityIcon className='class-icon'/>3
              <CommentIcon className='class-icon'/>3
              <LaunchIcon className='class-icon important'/>
          </div>
    </div>
  )
}

export default Card