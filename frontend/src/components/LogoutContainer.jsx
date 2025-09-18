import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../components/wrapper/logoutContainer.js"
import { useEffect, useRef, useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";


const LogoutContainer = () => {
    const [showLogout, setShowLogout] = useState(false);
    const { user, logoutUser } = useDashboardContext();
    const containerRef=useRef(null);

    const toggleLogoutButton = () => setShowLogout((prev) => !prev);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target)
            ) {
                setShowLogout(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <Wrapper ref={containerRef}>
            <button
                type="button"
                className="btn logout-btn"
                onClick={toggleLogoutButton}
            >
                {user.avatar ? (
                    <img src={user.avatar} alt="avatar" className="img" />
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
