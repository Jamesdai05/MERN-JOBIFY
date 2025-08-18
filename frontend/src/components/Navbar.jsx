import { Link } from "react-router-dom";
import logo from "../assets/final.png";



const Navbar = () => {
  return (
      <div className="nav">
          <img src={logo} alt="logo" className="logo"/>
          <ul>
              <Link to="/">
                  <li>Home</li>
              </Link>
              <Link to="/landing">
                  <li>LandingPage</li>
              </Link>
              <Link to="/login">
                  <li>Login</li>
              </Link>
              <Link to="/register">
                  <li>Register</li>
              </Link>
              <Link to="/dashboard">
                  <li>Dashboard</li>
              </Link>
          </ul>
      </div>
  );
}
export default Navbar