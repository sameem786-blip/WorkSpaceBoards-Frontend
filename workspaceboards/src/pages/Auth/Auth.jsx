import React, { useState, useEffect } from "react";
import "./auth.css";

import AuthCard from "../../components/authCard/AuthCard";
import Loader from "../../components/Loader/Loader";
import OverlayPopup from "../../components/OverlayPopup/OverlayPopup";

const Auth = ({ content }) => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false)
  const [errMsg, setErrMsg] = useState("")
  const [errHeading, setErrHeading] = useState("")
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout when component unmounts
  }, []);

  const handleError = () => {
    setErr(true)
  }

  return (
    <div className="authContainer">
      {loading ? <Loader /> : (err ? <OverlayPopup heading={errHeading} msg={errMsg} /> : <AuthCard content={content} />)}

      
    </div>
  );
};

export default Auth;
