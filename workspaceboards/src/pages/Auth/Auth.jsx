import React from "react";
import "./auth.css";

import AuthCard from "../../components/authCard/AuthCard";

const Auth = ({ content }) => {
  return (
    <div className="authContainer">
      <AuthCard content={content} />
    </div>
  );
};

export default Auth;
