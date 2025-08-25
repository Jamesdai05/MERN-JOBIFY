// import Navbar from "./components/Navbar.jsx";
import "./App.css";
import {
    createBrowserRouter,
    // createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import AddJob from "./pages/AddJob";
import About from "./pages/About";
import HomeLayout from "./pages/HomeLayout";
import Error from "./pages/Error";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Stats from "./pages/Stats";
import AllJobs from "./pages/Admin/AllJobs";
import DashboardLayout from "./pages/Admin/DashboardLayout";
import Admin from "./pages/Admin/Admin";
import EditJob from './pages/Admin/EditJob';
import { useEffect } from "react";


export const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem("darkTheme") === "true";
    document.body.classList.toggle("dark-theme", isDarkTheme);
    return isDarkTheme;
};


// checkDefaultTheme();



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
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "dashboard",
                element: <DashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <AddJob />,
                    },
                    {
                        path: "stats",
                        element: <Stats />,
                    },
                    {
                        path: "add-job",
                        element: <AddJob />,
                    },
                    {
                        path: "all-jobs",
                        element: <AllJobs />,
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
      <RouterProvider router={router}/>
    </div>
  )
}
export default App
