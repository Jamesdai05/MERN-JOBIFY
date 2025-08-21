import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
import "./App.css";

const App = () => {
  return (

    <div>
      {/* <Navbar /> */}
      <Outlet />
    </div>
  )
}
export default App
