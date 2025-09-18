// import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
// import styled from "styled-components";
import { FaAlignLeft, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle.jsx";
import LogoutContainer from "./LogoutContainer.jsx";
import Wrapper from "./wrapper/navbar.js";
import { useDashboardContext } from "../pages/DashboardLayout";



const Navbar = ({toggleTheme}) => {
    const {toggleSidebar}=useDashboardContext();
    // console.log(data)

  return (
      <Wrapper>
          <div className="nav-center">
              <button
                  type="button"
                  className="toggleBtn"
                  onClick={toggleSidebar}
              >
                  <FaAlignLeft />
              </button>
              {/* <Logo /> */}
              {/* <Hamburger onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <FaTimes /> : <FaBars />}
              </Hamburger> */}
              {/* <ul className="menu">
                  <Link to="/">
                      <li>Home</li>
                  </Link>
                  <Link to="/landing">
                      <li>LandingPage</li>
                  </Link>
                  <Link to="/login">
                      <li>Edit</li>
                  </Link>
                  <Link to="/register">
                      <li>Admin</li>
                  </Link>
                  <Link to="/dashboard">
                      <li>Dashboard</li>
                  </Link>
              </ul> */}
              <div>
                  <Logo />
                  <h4 className="logo-text">dashboard</h4>
              </div>
              <div className="btn-container">
                  <ThemeToggle onClick={toggleTheme}/>
                  <LogoutContainer />
              </div>
          </div>
      </Wrapper>
  );
}
export default Navbar