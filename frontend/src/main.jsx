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





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomeLayout />} />
      <Route path="/about" element={<About />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/add" element={<AddJob />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Error/>}/>
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
