import { FaWpforms } from "react-icons/fa"
import { ImProfile } from "react-icons/im";
// import { FaRegAddressCard } from "react-icons/fa6";
import { MdQueryStats } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";

const links=[
    {
        path:".",
        text:"Add Job",
        icon: <FaWpforms />,
    },
    {
        path:"all-jobs",
        icon:<MdQueryStats />,
        text:"All Job",
    },
    {
        path:"stats",
        icon:<ImStatsBars />,
        text:"Stats",
    },
    {
        path:"profile",
        icon:<ImProfile />,
        text:"Profile",
    }
];

export default links