import Logo from "../components/Logo.jsx";
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
      <div>
          <nav>
            <Logo />
          </nav>
          {/* <h2>HomeLayout</h2> */}
          <Outlet />
      </div>
  );
}
export default HomeLayout