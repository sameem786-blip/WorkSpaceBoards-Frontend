import React from 'react'
import "./addtowerbtn.css"
import builder from "../../public/Icons/builder.png"
import letterman from "../../public/Card/abc.png"

const AddTowerBtn = () => {
  return (
      <div className='addtowerbtn-container'>
      <div className="addtower-opaque">
        <img src={builder} alt='builder' className='builder-icon'></img>
        <p className='add-tower-text'>Add Tower</p>
          </div>
      <div className="addtower-opaque">
        <img src={letterman} alt='builder' className='builder-icon'></img>
        <p className='add-tower-text'>Add Card</p>
          </div>
    </div>
  )
}

export default AddTowerBtn