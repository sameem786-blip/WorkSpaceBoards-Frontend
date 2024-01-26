import React from "react";
import "./authCard.css";

const AuthCard = ({ content }) => {
  return (
    <div className="authCardContainer">
      {content == "login" ? (
        <div>
          <div className="left-auth-container">Login</div>
          <div className="right-auth-container"></div>
        </div>
      ) : (
        <div>
          <div className="left-auth-container"></div>
          <div className="right-auth-container">Signup</div>
        </div>
      )}
    </div>
  );
};

export default AuthCard;
