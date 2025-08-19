import { Link } from "react-router-dom";
import Wrapper from "../components/wrapper/bigSideBar.js";
import Logo from './Logo';
import { FaWpforms } from "react-icons/fa";

const BigSidebar = () => {
  return (
      <Wrapper>
          <div className="sidebar-container">
              <div className="content">
                  <header>
                      <Logo />
                  </header>
                  <div className="nav-links">
                      <Link to="/add-job">
                          <li className="link">
                              <span>
                                  <FaWpforms className="icon" />{" "}
                              </span>
                              Add Job
                          </li>
                      </Link>
                      <Link to="/all-jobs">
                          <li className="link">
                              <span>
                                  <FaWpforms className="icon" />{" "}
                              </span>
                              All Jobs
                          </li>
                      </Link>
                      <Link to="/stats">
                          <li className="link">
                              <span>
                                  <FaWpforms className="icon" />{" "}
                              </span>
                              Stats
                          </li>
                      </Link>
                      <Link to="/profile">
                          <li className="link">
                              <FaWpforms className="icon" />{" "}
                              <span>Profile</span>
                          </li>
                      </Link>
                  </div>
              </div>
          </div>
      </Wrapper>
  );
}
export default BigSidebar