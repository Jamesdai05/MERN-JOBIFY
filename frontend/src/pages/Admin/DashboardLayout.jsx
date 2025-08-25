import { Outlet } from "react-router-dom";
import Wrapper from "../../components/wrapper/dashboard.js";
import Sidebar from "../../components/Sidebar.jsx";
import BigSidebar from "../../components/BigSidebar.jsx";
import Navbar from "../../components/Navbar.jsx";
import { useContext, useState,createContext } from "react";
import { checkDefaultTheme } from "../../App.jsx";


// const DarkModeEnabled = checkDefaultTheme();
const DashboarContext=createContext()



const DashboardLayout = () => {
    const user = { name: "Jonh Doe" };
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

    const toggleTheme = () => {
        const updatedTheme = !isDarkTheme;
        setIsDarkTheme((prev) => !prev);
        console.log("Toggle Theme");

        localStorage.setItem("darkTheme", updatedTheme);
    };

    const toggleSidebar = () => setShowSidebar((prev) => !prev);

    const logoutUser = () => {
        console.log("User log out!");
    };

    return (
        <DashboarContext.Provider
            value={{
                user,
                showSidebar,
                isDarkTheme,
                toggleSidebar,
                toggleTheme,
                logoutUser,
            }}
        >
            <Wrapper>
                <main className="dashboard">
                    <Sidebar />
                    <BigSidebar />
                    <div>
                        <Navbar toggleTheme={toggleTheme} />
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboarContext.Provider>
    );
};

export const useDashboardContext =()=> useContext(DashboarContext)
export default DashboardLayout;