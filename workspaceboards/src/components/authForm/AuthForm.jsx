import React, { useState } from "react";
import "./authForm.css";
import AuthInput from "../AuthInput/AuthInput";
import ForwardIcon from "@mui/icons-material/Forward";

const AuthForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log("email: ", email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    console.log("password: ", password);
  };

  return (
    <div className="authform-container">
      <AuthInput content="email" callback={handleEmailChange} />
      <AuthInput content="password" callback={handlePasswordChange} />
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
