import React from "react";
import "./dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import Tower from "../../components/Tower/Tower";
import AddTowerBtn from "../../components/addTowerBtn/AddTowerBtn";

const Dashboard = () => {
  return (
    <div className="Dashboard-Container">
      <Tower />
      <AddTowerBtn />
    </div>
  );
};

export default Dashboard;
