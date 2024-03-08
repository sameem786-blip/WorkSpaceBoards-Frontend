import React from 'react'
import "./card.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import LaunchIcon from '@mui/icons-material/Launch';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Card = ({card}) => {

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ card });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
      <div className='card-container'ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
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