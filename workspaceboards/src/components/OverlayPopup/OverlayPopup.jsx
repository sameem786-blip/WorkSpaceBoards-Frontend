import React from 'react'
import "./overlaypopup.css"

const OverlayPopup = ({heading,msg}) => {
  return (
      <div className='popup-container'>
          <div className="top-plank"><p className='popup-board-text popup-board-heading'>{heading}</p></div>
          <div className="middle-plank"><p className='popup-board-msg'>{msg}</p></div>
          <div className="bottom-plank"><button className='popup-board-btn'>Retry...</button></div>
          <div className="pole"></div>
    </div>
  )
}

export default OverlayPopup