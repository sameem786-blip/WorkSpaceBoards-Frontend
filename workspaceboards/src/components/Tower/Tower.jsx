import React, { useState } from 'react';
import "./tower.css";
import towerTop from "../../public/towwer/top.png";
import towerBottom from "../../public/towwer/bottom.png";
import Card from '../Card/Card';
import { SortableContext, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";

const DraggableCard = ({ card }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: card.id });

  const style = {
    transform,
    transition,
  };

  return (
    <div className="draggable-card" ref={setNodeRef} {...attributes} style={style}>
      <Card card={card} />
    </div>
  );
};

const Tower = ({ tower }) => {
  const [cards, setCards] = useState(tower.cards);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const activeIndex = cards.findIndex((card) => card.id === active.id);
      const overIndex = cards.findIndex((card) => card.id === over.id);

      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        const [removed] = updatedCards.splice(activeIndex, 1);
        updatedCards.splice(overIndex, 0, removed);
        return updatedCards;
      });
    }
  };

  return (
    <div className='tower-container'>
      <div className="tower-title">
        {tower.name.split('').map((char, index) => (
          <span className="tower-title-span" key={index}>{char}</span>
        ))}
      </div>

      <div className='tower-cards'>
        <SortableContext items={cards.map(card => card.id)} strategy={verticalListSortingStrategy} onDragEnd={handleDragEnd}>
          {cards.map((card) => (
            <DraggableCard key={card.id} card={card} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default Tower;
