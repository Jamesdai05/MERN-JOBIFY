import styled from "styled-components";
import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import BigSidebar from "../../components/BigSidebar.jsx";
import Wrapper from  "../../components/wrapper/dashboard.js"




const Dashboard = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <Sidebar />
        <BigSidebar />
        <div className="dashboard-page">
          <Navbar />
          Dashboard

        </div>
      </main>
    </Wrapper>
  );
}
export default Dashboard