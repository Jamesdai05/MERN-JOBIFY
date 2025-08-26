import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ToastContainer } from "react-toastify";




// export const checkDefaultTheme = () => {
//     const isDarkTheme = localStorage.getItem("darkTheme") === "true";
//     document.body.classList.toggle("dark-theme", isDarkTheme);
//     return isDarkTheme;
// };

// checkDefaultTheme();

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<App />}>
//             <Route index={true} element={<HomeLayout />} />
//             <Route path="landing" element={<LandingPage />} />
//             <Route path="about" element={<About />} />
//             <Route path="register" element={<Register />} />
//             <Route path="login" element={<Login />} />
//             <Route path="*" element={<Error />} />

//             <Route path="dashboard" element={<DashboardLayout />}>
//                 <Route index element={<AddJob />} />
//                 <Route path="profile" element={<Profile />} />
//                 <Route path="stats" element={<Stats />} />
//                 <Route path="all-jobs" element={<AllJobs/>}/>
//                 <Route path="admin" element={<Admin />} />
//             </Route>
//         </Route>
//     )
// );


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        <ToastContainer position="top-center" />
    </StrictMode>
);
