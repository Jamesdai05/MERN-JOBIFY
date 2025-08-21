import Wrapper from "../components/wrapper/bigSideBar.js";
import { useDashboardContext } from "../pages/Admin/DashboardLayout.jsx";
import Logo from './Logo';
import Navlinks from "./Navlinks.jsx";



const BigSidebar = () => {
    const {showSidebar}=useDashboardContext()
    const bigSidebarClassName = showSidebar
        ? "sidebar-container show-sidebar"
        : "sidebar-container";

  return (
      <Wrapper>
          <div className={bigSidebarClassName}>
              <div className="content">
                  <header>
                      <Logo />
                  </header>
                  <div>
                      <Navlinks />
                  </div>
              </div>
          </div>
      </Wrapper>
  );
}
export default BigSidebar