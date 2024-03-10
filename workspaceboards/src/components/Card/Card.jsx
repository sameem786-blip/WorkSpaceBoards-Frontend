import React from 'react'
import "./card.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import LaunchIcon from '@mui/icons-material/Launch';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Card = ({card}) => {
  return (
    <div className='card-container'>
      {card.title}
      <div className="card-icons">
        <p>{card.createdBy}</p>
        <>
          <CommentIcon className="card-icon"/>
          <p>3</p>
        </>
        
      </div>
    </div>
  )
}

export default Card