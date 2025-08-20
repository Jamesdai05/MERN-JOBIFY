import { NavLink } from "react-router-dom";
import links from "../utils/links";


console.log(links)
const Navlinks = () => {

  return (
    <div className="nav-links">
        {links.map(link=>{
            const {icon,text,path}=link
            return (
            <NavLink key={text} to={path} className="nav-link">
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