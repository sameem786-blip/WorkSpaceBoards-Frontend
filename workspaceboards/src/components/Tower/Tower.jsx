import React from 'react'
import "./tower.css"
import towerTop from "../../public/towwer/top.png"
import towerBottom from "../../public/towwer/bottom.png"
import Card from '../Card/Card'
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";


const Tower = ({ tower }) => {

  const cards = tower.cards;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getCardPos = (id) => cards.findIndex((card) => card.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    const setCards = ((cards) => {
      const originalPos = getCardPos(active.id);
      const newPos = getCardPos(over.id);

      return arrayMove(cards, originalPos, newPos);
    });
    
    return (
      <div className='tower-container'>
        <div className="tower-top">
          <img src={towerTop} alt='top' className='top-img' />
        </div>
        <div className="tower-center">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
          >
            {cards.map((item, index) => (
              <Card card={item} key={index} />
            ))}
          </DndContext>
        </div>
        <div className="tower-bottom">
          <img src={towerBottom} alt='top' className='bottom-img' />
        </div>
      </div>
    )
  }
}

export default Tower