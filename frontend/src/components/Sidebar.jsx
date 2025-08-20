import Wrapper from "./wrapper/sidebar.js"
import Logo from './Logo';
import { useDashboardContext } from "../pages/Admin/DashboardLayout.jsx";
import Navlinks from "./Navlinks.jsx";
import { FaTimes } from "react-icons/fa";
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
                  <Navlinks />
              </div>
          </div>
      </Wrapper>
  );
}
export default Sidebar