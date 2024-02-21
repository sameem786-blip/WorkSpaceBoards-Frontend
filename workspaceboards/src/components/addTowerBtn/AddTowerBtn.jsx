import React from 'react'
import "./addtowerbtn.css"
import builder from "../../public/Icons/builder"

const AddTowerBtn = () => {
  return (
      <div className='addtowerbtn-container'>
      <div className="addtower-opaque">
        <img src={builder} alt='builder'></img>
          </div>
    </div>
  )
}

export default AddTowerBtn