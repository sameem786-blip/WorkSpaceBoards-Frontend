import React from "react";
import "./authInput.css";
import ForwardIcon from "@mui/icons-material/Forward";

const AuthInput = ({ content, callback,val }) => {
  return (
    <div className="outer-input-container">
      <div className="inner-input-column-container">
        <div className="input-label-container">
          <label className="label">
            {content === "email" ? "Email Address" : "Password"}
          </label>
        </div>
        <div className="inner-input-row-container">
          <div className="green-arrow-container">
            <ForwardIcon className="arrow-icon" />
          </div>
          <div className="input-container">
            <input
              className="input"
              onChange={callback}
              value={val}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthInput;
