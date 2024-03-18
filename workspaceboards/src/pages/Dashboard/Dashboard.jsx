import React, { useState } from "react";
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Tower from "../../components/Tower/Tower";
import AddTowerBtn from '../../components/addTowerBtn/AddTowerBtn'
import './dashboard.css'

const Dashboard = () => {
  const [towers, setTowers] = useState([
    {
      id: "1",
      name: "Tower 1",
      createdById: "1",
      position: "1",
      cards: [
        { id: "1", position: "1", title: "Test Titl 1", createdBy: "Test User 1" },
        { id: "2", position: "2", title: "Test Title 2", createdBy: "Test User 2" },
        { id: "3", position: "3", title: "Test Title 3", createdBy: "Test User 2" },
        { id: "4", position: "4", title: "Test Title 4", createdBy: "Test User 2" },
        { id: "5", position: "5", title: "Test Title 5", createdBy: "Test User 2" },
        { id: "6", position: "6", title: "Test Title 6", createdBy: "Test User 2" },
      ],
    },
    {
      id: "2",
      name: "Tower 2",
      createdById: "1",
      position: "2",
      cards: [
        { id: "7", position: "1", title: "Test Title 1", createdBy: "Test User 1" },
        { id: "8", position: "2", title: "Test Title 2", createdBy: "Test User 2" },
        { id: "9", position: "3", title: "Test Title 3", createdBy: "Test User 2" },
        { id: "10", position: "4", title: "Test Title 4", createdBy: "Test User 2" },
      ],
    },
    // Add more towers as needed
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
  const { active, over } = event;

  if (active.id === over.id) return;

  setTowers((prevTowers) => {
    const sourceTowerIndex = prevTowers.findIndex((tower) => tower.id === active.id);
    const destinationTowerIndex = prevTowers.findIndex((tower) => tower.id === over.id);
    
    const updatedTowers = [...prevTowers];
    const sourceTower = { ...updatedTowers[sourceTowerIndex] };
    const destinationTower = { ...updatedTowers[destinationTowerIndex] };

    const activeCardIndex = sourceTower.cards.findIndex((card) => card.id === active.id);
    const movedCard = sourceTower.cards[activeCardIndex];

    // Remove the card from the source tower
    sourceTower.cards.splice(activeCardIndex, 1);

    // Update the towerId of the moved card
    movedCard.towerId = destinationTower.id;

    // Insert the card into the destination tower
    destinationTower.cards.push(movedCard);

    // Update the towers array with modified source and destination towers
    updatedTowers[sourceTowerIndex] = sourceTower;
    updatedTowers[destinationTowerIndex] = destinationTower;

    // Reload the window after state update
    setTimeout(() => {
      setTowers(updatedTowers);
      window.location.reload();
    }, 0);
    
    return updatedTowers;
  });
};


  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="Dashboard-Container">
        {towers.map((tower) => (
          <Tower key={tower.id} tower={tower} />
        ))}
      <AddTowerBtn />
      </div>
    </DndContext>
  );
};

export default Dashboard;
