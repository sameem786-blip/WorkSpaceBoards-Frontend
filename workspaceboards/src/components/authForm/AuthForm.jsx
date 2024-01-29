import React, { useState } from "react";
import "./authForm.css";
import AuthInput from "../AuthInput/AuthInput";
import ForwardIcon from "@mui/icons-material/Forward";

const AuthForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="authform-container">
      <AuthInput content="email" onChange={handleEmailChange} />
      <AuthInput content="password" onChange={handlePasswordChange} />
      <div className="btn-container">
        <div className="btn-row">
          <div className="green-arrow-container">
            <ForwardIcon />
          </div>
          <button className="btn">{login ? "Sign in" : "Sign up"}</button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
