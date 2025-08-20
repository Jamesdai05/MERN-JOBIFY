import Wrapper from "../components/wrapper/bigSideBar.js";
import Logo from './Logo';
import Navlinks from "./Navlinks.jsx";


const BigSidebar = () => {
  return (
      <Wrapper>
          <div className="sidebar-container">
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