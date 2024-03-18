import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Navbar from "./components/Navbar/Navbar";
import OverlayPopup from "./components/OverlayPopup/OverlayPopup.jsx";

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
import Profile from "./pages/Profile/Profile";

function App() {
  const { currentUser } = useContext(AuthContext);
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <div>
          <div >
            <Outlet />
          </div>
        </div>
        </div>
        </QueryClientProvider>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children;
  }

  

  return (
    <div className="App">
      {/* <OverlayPopup heading={ `Error!`} msg={`Invalid Password`}/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage content="login" />} />
          <Route path="/register" element={<AuthPage content="register" />} />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
