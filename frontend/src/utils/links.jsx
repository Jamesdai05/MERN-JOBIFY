import { FaWpforms } from "react-icons/fa"
import { ImProfile } from "react-icons/im";
// import { FaRegAddressCard } from "react-icons/fa6";
import { MdQueryStats } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
    {
        path: ".",
        text: "Add Job",
        icon: <FaWpforms />,
    },
    {
        path: "all-jobs",
        icon: <MdQueryStats />,
        text: "All Job",
    },
    {
        path: "stats",
        icon: <ImStatsBars />,
        text: "Stats",
    },
    {
        path: "users/profile",
        icon: <ImProfile />,
        text: "Profile",
    },
    {
        path: "admin",
        icon: <MdAdminPanelSettings />,
        text: "Admin",
    },
];

export default links