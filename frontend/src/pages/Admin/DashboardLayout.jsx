import { Outlet } from "react-router-dom";
import Wrapper from "../../components/wrapper/dashboard.js";
import Sidebar from "../../components/Sidebar.jsx";
import BigSidebar from "../../components/BigSidebar.jsx";





const DashboardLayout = () => {
  return (
      <div>
          <Wrapper>
              <main className="dashboard">
                  <Sidebar />
                  <BigSidebar />
                  <div className="dashboard-page">
                      Dashboard
                      <Outlet/>
                  </div>
              </main>
          </Wrapper>
      </div>
  );
}
export default DashboardLayout