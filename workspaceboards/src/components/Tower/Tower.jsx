import React from 'react'
import "./tower.css"
import towerTop from "../../public/towwer/top.png"
import towerBottom from "../../public/towwer/bottom.png"
import Card from '../Card/Card'
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";


const Tower = ({ tower }) => {
  const cards = tower.cards;
  return (
      <div className='tower-container'>
      <div className="tower-title">
        <h4>{tower.name}</h4>
      </div>
      <div className='tower-cards'>
      {cards.map((card, index) => {
        <Card card={card} key={index} />
      })}
        </div>
    </div>
  )
}

export default Tower