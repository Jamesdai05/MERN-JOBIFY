import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDashboardContext } from '../pages/Admin/DashboardLayout';



const Navlinks = ({isBigSidebar}) => {
  const {toggleSidebar,user}=useDashboardContext()
  const {role}=user;

  return (
    <div className="nav-links">
        {links.map(link=>{
            const {icon,text,path}=link
            return (
            <NavLink key={text} to={path} className="nav-link" onClick={isBigSidebar ? "" : toggleSidebar}>
              <span className="icon">
                  {icon}
              </span>
              {text}
            </NavLink>)})
        }
    </div>
  )
}
export default Navlinks