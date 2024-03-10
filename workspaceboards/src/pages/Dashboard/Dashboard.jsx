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
          "createdBy": "Test User 1"
          
        },
        {
          "id": "2",
          "position": "1",
          "title": "Test Title 1",
          "createdBy": "Test User 1"

        },
        {
          "id": "3",
          "position": "1",
          "title": "Test Title 1",
          "createdBy": "Test User 1"

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
          "title": "Test Title 2",
          "createdBy": "Test User 1"
          
        },
        {
          "id": "2",
          "position": "1",
          "title": "Test Title 1",
          "createdBy": "Test User 1"

        },
        {
          "id": "3",
          "position": "1",
          "title": "Test Title 1",
          "createdBy": "Test User 1"

        }
      ],
    },
  ])

  return (
    <div className="Dashboard-Container">
      
        {towers.map((item,index) => (
        <Tower tower={item} key={index}/>
      ))}
      <AddTowerBtn />
    </div>
  );
};

export default Dashboard;
