import React from "react";
import "./dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import Tower from "../../components/Tower/Tower";
import AddTowerBtn from "../../components/addTowerBtn/AddTowerBtn";


const Dashboard = () => {

  const towers = [
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
  ]
  return (
    <div className="Dashboard-Container">
      {towers.map((item,index) => {
        <Tower tower={item} />
      })}
      
      <Tower />
      <AddTowerBtn />
    </div>
  );
};

export default Dashboard;
