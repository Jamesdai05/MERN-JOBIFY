import axios from "axios";
import {redirect} from "react-router-dom";
import { toast } from "react-toastify";


export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // Client-side validation for password confirmation
    if (data.password !== data.confirmPassword) {
        toast.error("Passwords do not match");
        return null;
    }

    // Basic validation for password length
    if (data.password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return null;
    }

    // Basic validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        toast.error("Please enter a valid email address");
        return null;
    }

    // console.log(data);
    try {
        const response = await axios.post("/api/auth/register", data, {
            withCredentials: true,
        });
        const user = response.data;

        // Store user data in localStorage (same as login)
        localStorage.setItem("user", JSON.stringify(user));

        toast.success("Registration is successfully!");
        return redirect("/dashboard");
    } catch (err) {
        console.error("Register error:", err.response?.data || err.message);
        console.log(err);
        // Handle validation errors from backend
        if (err.response?.data?.details) {
            const errors = Array.isArray(err.response.data.details)
                ? err.response.data.details
                : [err.response.data.details];
            errors.forEach(error => toast.error(error));
            return null;
        }

        // Handle general errors
        const errorMessage = err.response?.data?.message || "Registration failed";
        toast.error(errorMessage);
        return null;
    }
};