import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  return <div className="App"></div>;
}

export default App;
