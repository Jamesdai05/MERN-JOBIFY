import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AddJob from './pages/AddJob.jsx';
import About from './pages/About.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="add" element={<AddJob />}/>
      <Route path='dashboard' element={<Dashboard />}/>
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
