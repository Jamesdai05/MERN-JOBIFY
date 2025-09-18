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
        const handleEscapeKey = (e) => {
            if (e.key === "Escape") {
                setShowLogout(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);
        return () =>{
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    return (
        <Wrapper ref={containerRef}>
            <button
                type="button"
                className="btn logout-btn"
                onClick={toggleLogoutButton}
                aria-expanded={showLogout}
            >
                {user?.avatar ? (
                    <img src={user.avatar} alt="avatar" className="img-avatar" />
                ) : (
                    <FaUserCircle />
                )}
                {user?.name || "user"}
                <FaCaretDown />
            </button>
            {showLogout && <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
                <button
                    type="button"
                    className="dropdown-btn"
                    onClick={logoutUser}
                >
                    logout
                </button>
            </div>}
        </Wrapper>
    );
};
export default LogoutContainer;
