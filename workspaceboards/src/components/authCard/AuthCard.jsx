import React from "react";
import "./authCard.css";
import Kiki from "../Kiki/Kiki";
import AuthForm from "../authForm/AuthForm";

const AuthCard = ({ content, handleError }) => {
  return (
    <div className="authCardContainer">
      {content === "login" ? (
        <div className="auth-card-inner-container">
          <div className="left-auth-container">
            <AuthForm handleError={ handleError} loginStage={true} />
          </div>
          <div className="right-auth-container hidden">
            <Kiki flipped={false} />
          </div>
        </div>
      ) : (
        <div className="auth-card-inner-container">
          <div className="left-auth-container hidden">
            <Kiki flipped={true} />
          </div>
          <div className="right-auth-container">
            <AuthForm loginStage={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthCard;
