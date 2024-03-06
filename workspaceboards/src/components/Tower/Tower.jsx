import React from 'react'
import "./tower.css"
import towerTop from "../../public/towwer/top.png"
import towerBottom from "../../public/towwer/bottom.png"
import Card from '../Card/Card'


const Tower = ({ tower }) => {
  const cards = tower.cards;
  return (
      <div className='tower-container'>
      <div className="tower-top">
        <img src={towerTop} alt='top' className='top-img'/>
          </div>
      <div className="tower-center">
        {cards.map((item,index) => (
          <Card card={item} key={ index} />
      ))}
      </div>
      <div className="tower-bottom">
        <img src={towerBottom } alt='top' className='bottom-img'/>
          </div>
    </div>
  )
}

export default Tower