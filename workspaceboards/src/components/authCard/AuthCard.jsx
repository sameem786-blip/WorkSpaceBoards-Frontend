import React from "react";
import "./authCard.css";
import Kiki from "../Kiki/Kiki";

const AuthCard = ({ content }) => {
  return (
    <div className="authCardContainer">
      {content === "login" ? (
        <div className="auth-card-inner-container">
          <div className="left-auth-container"></div>
          <div className="right-auth-container">
            <Kiki flipped={false} />
          </div>
        </div>
      ) : (
        <div className="auth-card-inner-container">
          <div className="left-auth-container">
            <Kiki flipped={true} />
          </div>
          <div className="right-auth-container"></div>
        </div>
      )}
    </div>
  );
};

export default AuthCard;
