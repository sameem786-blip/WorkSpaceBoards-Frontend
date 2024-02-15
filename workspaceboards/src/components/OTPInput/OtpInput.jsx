import {useContext, useState} from 'react'
import { AuthContext } from "../../context/authContext";
import "./otpInput.css"
import axios from "axios";

import Hellboy from '../../components/Hellboy/Hellboy'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AuthInput from '../../components/AuthInput/AuthInput';

import { Link, useNavigate } from "react-router-dom";

import config from "../../config/config.json";

const serverURL = config.serverURL;

const OtpInput = () => {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");

  const { currentUser } = useContext(AuthContext);

  const handleOtpInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "otp1":
        setOtp1(value);
        if (value !== "") document.getElementsByName("otp2")[0].focus();
        break;
      case "otp2":
        setOtp2(value);
        if (value !== "") document.getElementsByName("otp3")[0].focus();
        break;
      case "otp3":
        setOtp3(value);
        if (value !== "") document.getElementsByName("otp4")[0].focus();
        break;
      case "otp4":
        setOtp4(value);
        break;
      default:
        break;
    }
  };

  const submitOtp = async () => {
    const otp = otp1 + otp2 + otp3 + otp4;
    // Implement your OTP submission logic here
    console.log("OTP submitted:", otp);
    const response = await axios.post(`${serverURL}/auth/user/forgetPassword/submitOTP`, {
      otp: otp,
      email: currentUser.user.email
        },
          {headers: {
          Authorization: `Bearer ${currentUser.token}`,
        }}
        );
  };

  return (
    <div className='otp-container'>
      <div className='otp-msg'>
        <p className='otp-label'>A 4 digit otp has been sent to your email, enter it below to complete the verification process and move ahead.</p>
      </div>
      <div className="otp-input-row">
        <input className='otp-input' value={otp1} name="otp1" type="number" onChange={handleOtpInput} maxLength="1" min="0" max="9" step="1" />
        <input className='otp-input' value={otp2} name="otp2" type="number" onChange={handleOtpInput} maxLength="1" min="0" max="9" step="1" />
        <input className='otp-input' value={otp3} name="otp3" type="number" onChange={handleOtpInput} maxLength="1" min="0" max="9" step="1" />
        <input className='otp-input' value={otp4} name="otp4" type="number" onChange={handleOtpInput} maxLength="1" min="0" max="9" step="1" />
      </div>
      <div className='otp-submit'>
        <button className='btn' onClick={submitOtp}>Submit</button>
      </div>
    </div>
  );
};

export default OtpInput;
