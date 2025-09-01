import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDashboardContext } from '../pages/DashboardLayout';



const Navlinks = ({isBigSidebar}) => {
  const {toggleSidebar,user}=useDashboardContext()

  return (
    <div className="nav-links">
        {links.map(link=>{
            const {icon,text,path}=link
            // use this as the prop to test the index
            const { role } = user;
            if (path === "admin" && role !== "admin") return;
            const isIndexRoute =
                path === "." || path === "/dashboard";
            return (
                <NavLink
                    key={text}
                    to={path}
                    className="nav-link"
                    onClick={isBigSidebar ? "" : toggleSidebar}
                    end={isIndexRoute}
                >
                    <span className="icon">{icon}</span>
                    {text}
                </NavLink>
            );})
        }
    </div>
  )
}
export default Navlinks