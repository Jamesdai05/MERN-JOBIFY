import { Outlet } from "react-router-dom";
import Wrapper from "../../components/wrapper/dashboard.js";
import Sidebar from "../../components/Sidebar.jsx";
import BigSidebar from "../../components/BigSidebar.jsx";
import Navbar from "../../components/Navbar.jsx";
import { useContext, useState,createContext } from "react";



const DashboarContext=createContext()



const DashboardLayout = () => {

    const user={name:"Jonh Doe"}
    const [showSidebar,setShowSidebar]=useState(true)
    const [isDarkTheme,setIsDarkTheme]=useState(false)

    const toggleTheme=()=>{
        setIsDarkTheme(prev=>!prev)
        console.log("Toggle Theme");
    }

    const toggleSidebar = () => setShowSidebar((prev) => !prev);

    const logoutUser=()=>{

    }


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
                      <Navbar />
                      <div className="dashboard-page">
                          <Outlet />
                      </div>
                  </div>
              </main>
          </Wrapper>
      </DashboarContext.Provider>
  );
}

export const useDashboardContext =()=> useContext(DashboarContext)
export default DashboardLayout