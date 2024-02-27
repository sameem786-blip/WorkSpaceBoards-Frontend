import React from 'react'
import "./card.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';

const Card = () => {
  return (
      <div className='card-container'>
          <div className="car-title">Card Container Title</div>
          <div className="card-icons">
              <VisibilityIcon className='class-icon'/>
              <CommentIcon />
          </div>
    </div>
  )
}

export default Card