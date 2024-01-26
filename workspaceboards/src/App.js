import "./App.css";
import { useContext } from "react";
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

function App() {
  // const { currentUser } = useContext(AuthContext);
  const queryClient = new QueryClient();

  // const Layout = () => {
  //   return (
  //     <QueryClientProvider client={queryClient}>
  //       <Navbar />
  //       <div style={{display:"flex"}}>
  //         <Leftbar />
  //         <div style={{flex:6}}>
  //           <Outlet />
  //         </div>
  //         <Rightbar />
  //       </div>
  //       </div>
  //       </QueryClientProvider>
  //   )
  // }

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />
  //   }

  //   return children;
  // }

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Auth content="signup" />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
