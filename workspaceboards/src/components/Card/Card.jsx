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
    </div>
  )
}

export default Card