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




createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        <ToastContainer position="top-center" />
    </StrictMode>
);
