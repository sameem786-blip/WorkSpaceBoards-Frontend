import React from 'react'
import "./tower.css"
import towerTop from "../../public/towwer/top.png"
import towerBottom from "../../public/towwer/bottom.png"

const Tower = () => {
  return (
      <div className='tower-container'>
      <div className="tower-top">
        <img src={towerTop} alt='top' className='tower-top'/>
          </div>
          <div className="tower-center"></div>
      <div className="tower-bottom">
        <img src={towerBottom } alt='top' className='tower-bottom'/>
          </div>
    </div>
  )
}

export default Tower