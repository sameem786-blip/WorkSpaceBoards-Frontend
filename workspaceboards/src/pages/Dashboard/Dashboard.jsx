import React, { useState } from "react";
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Tower from "../../components/Tower/Tower";

const Dashboard = () => {
  const [towers, setTowers] = useState([
    {
      id: "1",
      name: "Tower 1",
      createdById: "1",
      position: "1",
      cards: [
        { id: "1", position: "1", title: "Test Title 1", createdBy: "Test User 1" },
        { id: "2", position: "2", title: "Test Title 2", createdBy: "Test User 2" },
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
      const activeTowerIndex = prevTowers.findIndex((tower) => tower.id === active.id);
      const overTowerIndex = prevTowers.findIndex((tower) => tower.id === over.id);

      const updatedTowers = [...prevTowers];
      const activeTower = updatedTowers[activeTowerIndex];
      const overTower = updatedTowers[overTowerIndex];

      const activeCardIndex = activeTower.cards.findIndex((card) => card.id === active.id);

      const movedCard = activeTower.cards[activeCardIndex];

      // Remove the card from the active tower
      activeTower.cards.splice(activeCardIndex, 1);

      // Insert the card into the over tower
      overTower.cards.push(movedCard);

      return updatedTowers;
    });
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="Dashboard-Container">
        {towers.map((tower) => (
          <Tower key={tower.id} tower={tower} />
        ))}
      </div>
    </DndContext>
  );
};

export default Dashboard;
