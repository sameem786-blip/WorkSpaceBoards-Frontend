import React from 'react';
import "./card.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import LaunchIcon from '@mui/icons-material/Launch';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const DraggableCard = ({ card }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: card.id,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div className='card-container' ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {card.title}
      <div className="card-icons">
        <p>{card.createdBy}</p>
        <div className='whatever'>
          <CommentIcon className="card-icon" />
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default DraggableCard;
