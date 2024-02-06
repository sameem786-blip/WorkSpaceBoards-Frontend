import { useContext, useState } from "react";
import "./authForm.css";
import AuthInput from "../AuthInput/AuthInput";
import ForwardIcon from "@mui/icons-material/Forward";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = ({ loginStage,handleError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpStage, setSignupStage]= useState(false)

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log("email: ", email);
  };

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    console.log("password: ", password);
  };
const { login } = useContext(AuthContext);
  const handleLogin = async() => {
    try {
      await login({email,password});
      navigate("/login")
    } catch (err) {
      if (err.code == "ERR_NETWORK") {
        handleError(true,"Network Error","Try Again")
      }
      if (err.response.status == 401) {
        handleError(true,"Bad Request","Invalid Credentials")
      }
      console.log(err.response.status == 401);

    }
  }
  const { signup } = useContext(AuthContext);
  const handleSignup = async() => {
    try {
          await signup({email,password});
          navigate("/login")
    } catch (err) {
      if (err.code == "ERR_NETWORK") {
        handleError(true,"Network Error","Try Again")
      }
          console.log(err);
        }
  }

  return (
    <div className="authform-container">
      <AuthInput content="email" value={email} callback={handleEmailChange} />
      <AuthInput content="password" value={password } callback={handlePasswordChange} />
      <div className="btn-container">
        <div className="btn-row">
          <button className="btn" onClick={loginStage ? (handleLogin) : (handleSignup)}>
            {loginStage ? "Log In" : "Sign Up"}
          </button>
          <button className="btn" onClick={loginStage ? (handleSignup) : (handleLogin)}>
            {loginStage ? "Sign Up": "Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
