import React, { useState } from "react";
import "./authForm.css";
import AuthInput from "../AuthInput/AuthInput";
import ForwardIcon from "@mui/icons-material/Forward";

const AuthForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpStage, setSignupStage]= useState(false)

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log("email: ", email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    console.log("password: ", password);
  };

  const handleSignupRedirect = () => {
setSignupStage(true)
  }

  const handleLogin = () => {

  }
  const handleSignup = () => {

  }

  return (
    <div className="authform-container">
      <AuthInput content="email" callback={handleEmailChange} />
      <AuthInput content="password" callback={handlePasswordChange} />
      <div className="btn-container">
        <div className="btn-row">
          <button className="btn" onClick={email ? (password ? (handleLogin) : (signUpStage ? (handleSignup) : (handleSignupRedirect))) : (signUpStage ? (handleSignup) : (handleSignupRedirect))}>
            {email ? (password ? (signUpStage ? "Sign Up" : "Sign In") : "Sign Up") : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
