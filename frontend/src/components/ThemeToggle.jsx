import { useDashboardContext } from "../pages/Admin/DashboardLayout.jsx";
import { FaMoon, FaSun } from "react-icons/fa6";
import Wrapper from "./wrapper/themeToggle.js";


const ThemeToggle = () => {

    const {isDarkTheme,toggleTheme}=useDashboardContext()

    return (
        <Wrapper onClick={toggleTheme}>
            {isDarkTheme ? (
                <FaMoon className="toggle-icon" />
            ) : (
                <FaSun className="toggle-icon" />
            )}
        </Wrapper>
    );
    }
export default ThemeToggle