import React from 'react'
import "./tower.css"
import towerTop from "../../public/towwer/top.png"
import towerBottom from "../../public/towwer/bottom.png"
import Card from '../Card/Card'


const Tower = () => {
  return (
      <div className='tower-container'>
      <div className="tower-top">
        <img src={towerTop} alt='top' className='top-img'/>
          </div>
      <div className="tower-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="tower-bottom">
        <img src={towerBottom } alt='top' className='bottom-img'/>
          </div>
    </div>
  )
}

export default Tower