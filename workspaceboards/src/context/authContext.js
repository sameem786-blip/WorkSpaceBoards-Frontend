import axios from "axios";
import { createContext, useEffect, useState } from "react";
import config from "../config/config.json";

const serverURL = config.serverURL;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("workspace-user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(`${serverURL}/auth/user/login`, inputs);

    setCurrentUser(res.data);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("workspace-user");
  };

  useEffect(() => {
    localStorage.setItem("workspace-user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
