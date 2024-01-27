import "./App.css";
import { useState,useContext } from "react";
import { AuthContext } from "./context/authContext";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./pages/Auth/Auth.jsx";

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthPage from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // const { currentUser } = useContext(AuthContext);
  const queryClient = new QueryClient();

  const handleRouteChange = (isLoading) => {
    setIsLoading(isLoading);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isLoading && <Loader />}
        <Routes>
          <Route
            path="/register"
            element={<Auth content="signup" handleRouteChange={handleRouteChange} />}
          />
          <Route
            path="/login"
            element={<Auth content="login" handleRouteChange={handleRouteChange} />}
          />
          <Route path="/" element={<Dashboard handleRouteChange={handleRouteChange} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
