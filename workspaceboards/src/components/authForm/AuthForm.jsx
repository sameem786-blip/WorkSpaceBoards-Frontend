import { useContext, useState } from "react";
import "./authForm.css";
import AuthInput from "../AuthInput/AuthInput";
import ForwardIcon from "@mui/icons-material/Forward";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = ({ loginStage }) => {
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

  const handleSignupRedirect = () => {
    setSignupStage(true)
    navigate("/register")
  }
const { login } = useContext(AuthContext);
  const handleLogin = async() => {
    try {
      await login({email,password});
      navigate("/login")
    } catch (err) {
      console.log(err);
    }
  }
  const { signup } = useContext(AuthContext);
  const handleSignup = async() => {
    try {
          await signup({email,password});
          navigate("/login")
        } catch (err) {
          console.log(err);
        }
  }

  return (
    <div className="authform-container">
      <AuthInput content="email" callback={handleEmailChange} />
      <AuthInput content="password" callback={handlePasswordChange} />
      <div className="btn-container">
        <div className="btn-row">
          <button className="btn" onClick={email ? (password ? (loginStage ? (handleLogin) : (handleSignupRedirect)) : (handleSignupRedirect)) : (handleSignupRedirect)  }>
            {email ? (password ? (signUpStage ? "Sign Up" : (loginStage ? "Sign In" : "Sign Up")) : "Sign Up") : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
