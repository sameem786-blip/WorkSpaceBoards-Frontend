import React, {useState} from 'react'
import "./tower.css"
import towerTop from "../../public/towwer/top.png"
import towerBottom from "../../public/towwer/bottom.png"
import Card from '../Card/Card'
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";


const Tower = ({ tower }) => {
  const [cards, setCards] = useState([tower.cards]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
      <div className='tower-container'>
      <div className="tower-title">
        {tower.name.split('').map((char, index) => (
            <span className="tower-title-span" key={index}>{char}</span>
        ))}
      </div>
      
      <div className='tower-cards'>
        <SortableContext items={cards} strategy={verticalListSortingStrategy}>
        {cards.map((card, index) => (
    <Card card={card} key={index} />
  ))}
      </SortableContext>
  
</div>
    </div>
  )
}

export default Tower