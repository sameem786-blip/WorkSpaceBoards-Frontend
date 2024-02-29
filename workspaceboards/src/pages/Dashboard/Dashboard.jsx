import React from "react";
import "./dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import Tower from "../../components/Tower/Tower";
import AddTowerBtn from "../../components/addTowerBtn/AddTowerBtn";


const Dashboard = () => {

  const towers = [
    {
      "name": "Tower 1",
      "createdById": "1",
      "position": "1"
    },
  ]
  return (
    <div className="Dashboard-Container">
      <Tower />
      <Tower />
      <AddTowerBtn />
    </div>
  );
};

export default Dashboard;
