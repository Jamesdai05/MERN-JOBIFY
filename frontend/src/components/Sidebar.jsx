import Wrapper from "./wrapper/sidebar.js"
import Logo from './Logo';
import { useDashboardContext } from "../pages/Admin/DashboardLayout.jsx";
import { FaTimes } from "react-icons/fa";
import links from "../utils/links.jsx";
import { NavLink } from "react-router-dom";
// import { useState } from "react";


const Sidebar = () => {
  const {showSidebar, toggleSidebar } = useDashboardContext();
  const sideBarClassName = showSidebar
      ? "show-sidebar sidebar-container"
      : "sidebar-container";

  return (
      <Wrapper>
          <div className={sideBarClassName}>
              <div className="content">
                  <button
                      type="button"
                      className="close-btn"
                      onClick={toggleSidebar}
                  >
                      <FaTimes />
                  </button>
                  <header>
                      <Logo />
                  </header>
                  <div className="nav-links">
                      {links.map((link) => {
                          const { icon, text, path } = link;
                          return (
                              <NavLink
                                  key={text}
                                  to={path}
                                  className="nav-link"
                              >
                                  <span className="icon">{icon}</span>
                                  {text}
                              </NavLink>
                          );
                      })}
                  </div>
              </div>
          </div>
      </Wrapper>
  );
}
export default Sidebar