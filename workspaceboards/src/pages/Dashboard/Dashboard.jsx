import React, {useState} from "react";
import "./dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import Tower from "../../components/Tower/Tower";
import AddTowerBtn from "../../components/addTowerBtn/AddTowerBtn";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";


const Dashboard = () => {
const [towers,setTower] = useState([
    {
      "id": "1",
      "name": "Tower 1",
      "createdById": "1",
      "position": "1",
      "cards": [
        {
          "id": "1",
          "position": "1",
          "title": "Test Title 1",
          
        },
        {
          "id": "2",
          "position": "1",
          "title": "Test Title 1",

        },
        {
          "id": "3",
          "position": "1",
          "title": "Test Title 1",

        }
      ],
    },
    {
      "id": "2",
      "name": "Tower 3",
      "createdById": "1",
      "position": "2",
      "cards": [
        {
          "id": "4",
          "position": "1",
          "title": "Test Title 1",
          
        },
        {
          "id": "2",
          "position": "1",
          "title": "Test Title 1",

        },
        {
          "id": "3",
          "position": "1",
          "title": "Test Title 1",

        }
      ],
    },
  ])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getCardPos = (id) => towers.findIndex((tower) => tower.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTower((cards) => {
      const originalPos = getCardPos(active.id);
      const newPos = getCardPos(over.id);

      return arrayMove(cards, originalPos, newPos);
    });
  };

  return (
    <div className="Dashboard-Container">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        {towers.map((item,index) => (
        <Tower tower={item} key={index}/>
      ))}
      </DndContext>
      <AddTowerBtn />
    </div>
  );
};

export default Dashboard;
