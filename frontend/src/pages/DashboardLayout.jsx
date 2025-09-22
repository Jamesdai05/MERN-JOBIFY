import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../components/wrapper/dashboard.js";
import Sidebar from "../components/Sidebar.jsx";
import BigSidebar from "../components/BigSidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import { useContext, useState, createContext } from "react";
import { checkDefaultTheme } from "../theme.js";
import axios from "axios";
import { toast } from "react-toastify";

// const DarkModeEnabled = checkDefaultTheme();
const DashboardContext = createContext();

const DashboardLayout = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    console.log(data);
    const user = data;
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

    // console.log(data)
    const toggleTheme = () => {
        setIsDarkTheme((prev) => {
            const updatedTheme = !prev;
            localStorage.setItem("darkTheme", updatedTheme);
            return updatedTheme;
        });
        console.log("Toggle Theme");
    };

    const toggleSidebar = () => setShowSidebar((prev) => !prev);

    const logoutUser = async () => {
        try {
            await axios.post("/api/auth/logout");
            toast.success("Log out successfully!");
        } catch (err) {
            console.error("Logout failed:", err);
            toast.error("Logout failed. Please try again.");
        } finally {
            localStorage.removeItem("user");
            navigate("/");
        }
        // console.log("User log out!");
    };

    return (
        <DashboardContext.Provider
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
                            <Outlet context={{ user }} />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
