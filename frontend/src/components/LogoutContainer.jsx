import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../components/wrapper/logoutContainer.js"
import { useState } from "react";
import { useDashboardContext } from "../pages/Admin/DashboardLayout.jsx";

const LogoutContainer = () => {
    const [showLogout, setShowLogout] = useState(false);
    const { user, logoutUser } = useDashboardContext();

    const toggleLogoutButton=()=>setShowLogout(prev=>!prev);

    return (
        <Wrapper>
            <button
                type="button"
                className="btn logout-btn"
                onClick={toggleLogoutButton}
            >
                {user.avatar ? (
                    <img src={user.avatar} alt="avatar" className="img-avt" />
                ) : (
                    <FaUserCircle />
                )}
                {user?.name}
                <FaCaretDown />
            </button>
            <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
                <button
                    type="button"
                    className="dropdown-btn"
                    onClick={logoutUser}
                >
                    logout
                </button>
            </div>
        </Wrapper>
    );
};
export default LogoutContainer;
