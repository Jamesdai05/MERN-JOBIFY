// import Navbar from "./components/Navbar.jsx";
import "./App.css";
import {
    createBrowserRouter,
    // createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AddJob from "./pages/AddJob";
import HomeLayout from "./pages/HomeLayout";
import Error from "./pages/Error";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Stats from "./pages/Stats";
import AdminAllJobs from "./pages/Admin/AllJobs";
import PublicAllJobs from "./pages/AllJobs";
import DashboardLayout from "./pages/Admin/DashboardLayout";
import Admin from "./pages/Admin/Admin";
import EditJob from "./pages/Admin/EditJob";
import { useEffect } from "react";
import { action as registerAction } from "./components/actions/registerAction.js";
import { checkDefaultTheme } from "./theme.js";
import { action as loginAction } from "./components/actions/loginAction.js";

import { loader as dashboardLoader } from "./components/actions/dashboardLoader.js";
import { loader as adminAllJobsLoader } from "./pages/Admin/AllJobs";
import { loader as publicAllJobsLoader } from "./pages/AllJobs";

import { action as addJobAction } from "./pages/AddJob.jsx";

// checkDefaultTheme();

// fetch("api/test")
//   .then(res=>res.json())
//   .then(data=>console.log(data))

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: "register",
                element: <Register />,
                action: registerAction,
            },
            {
                path: "login",
                element: <Login />,
                action: loginAction,
            },
            {
                path: "all-jobs",
                element: <PublicAllJobs />,
                loader: publicAllJobsLoader,
            },
            {
                path: "dashboard",
                loader: dashboardLoader,
                element: <DashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <AddJob />,
                        action: addJobAction,
                    },
                    {
                        path: "stats",
                        element: <Stats />,
                    },
                    {
                        path: "all-jobs",
                        element: <AdminAllJobs />,
                        loader: adminAllJobsLoader,
                    },
                    {
                        path: "admin",
                        element: <Admin />,
                    },
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                    {
                        path: "edit-job/:id",
                        element: <EditJob />,
                    },
                ],
            },
        ],
    },
]);

const App = () => {
    useEffect(() => {
        checkDefaultTheme;
    }, []);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};
export default App;
