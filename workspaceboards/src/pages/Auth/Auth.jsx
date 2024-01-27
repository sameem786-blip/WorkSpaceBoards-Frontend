import React, { useState, useEffect } from "react";
import "./auth.css";

import AuthCard from "../../components/authCard/AuthCard";
import Loader from "../../components/Loader/Loader";

const Auth = ({ content }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000);

    return () => clearTimeout(timer); // Cleanup timeout when component unmounts
  }, []);

  useEffect(() => {
  console.log("loading:", loading);
}, [loading]);

  return (
    <div className="authContainer">
      {loading ? <Loader /> : <AuthCard content={content} />}
    </div>
  );
};

export default Auth;
