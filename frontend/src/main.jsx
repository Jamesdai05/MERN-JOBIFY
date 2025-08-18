import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AddJob from './pages/AddJob.jsx';
import About from './pages/About.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx';
import DeleteJob from './pages/Admin/DeleteJob';
import EditJob from './pages/Admin/EditJob.jsx';
import HomeLayout from './pages/HomeLayout';
import Error from './pages/Error';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Stats from './pages/Stats';
import AllJobs from './pages/Admin/AllJobs.jsx';
import DashboardLayout from './pages/Admin/DashboardLayout.jsx';





const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} element={<HomeLayout />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Error />} />

            <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<AddJob />} />
                <Route path="profile" element={<Profile />} />
                {/* <Route path="add" element={<AddJob />} /> */}
                <Route path="stats" element={<Stats />} />
                <Route path="all-jobs" element={<AllJobs/>}/>
            </Route>
        </Route>
    )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
)
