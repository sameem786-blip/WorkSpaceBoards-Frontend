import React from 'react'
import "./overlaypopup.css"
import { Link, useNavigate } from "react-router-dom";

const OverlayPopup = ({ heading, msg }) => {
  const navigate = useNavigate();
  
  const handleRetry = () => {
    navigate("/")
  }
  return (
      <div className='popup-container'>
          <div className="top-plank"><p className='popup-board-text popup-board-heading'>{heading}</p></div>
          <div className="middle-plank"><p className='popup-board-msg'>{msg}</p></div>
          <div className="bottom-plank"><button className='popup-board-btn' onClick={handleRetry}>Retry...</button></div>
          <div className="pole"></div>
    </div>
  )
}

export default OverlayPopup