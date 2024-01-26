import React from "react";
import "./kiki.css";

const Kiki = ({ flipped }) => {
  return (
    <div className={flipped ? "kiki-container-flipped" : "kiki-container"}>
      <div className={flipped ? "moon-reversed" : "moon"}></div>
      <div className={flipped ? "kiki-reversed bounce" : "kiki bounce"}></div>
    </div>
  );
};

export default Kiki;
