import React from "react";
import "./kiki.css";

const Kiki = ({ flipped }) => {
  return (
    <div className={flipped ? "kiki-container-flipped" : "kiki-container"}>
      <div class="moon"></div>
      <div class="kiki bounce"></div>
    </div>
  );
};

export default Kiki;
