import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";




export const action=async({request})=>{
    const formData=await request.formData();
    const data=Object.fromEntries(formData);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(data.email)){
        toast.error("Not a valid email");
        return null;
    }
    // console.log(data);
    try {
        const response=await axios.post("/api/auth/login",data,{
            withCredentials:true,
        })
        const user=response.data;
        // console.log("Login successful:", user);

        localStorage.setItem("user", JSON.stringify(user));

        toast.success("Log in successfully!")
        return redirect("/dashboard");

    } catch (err) {
        console.error("Login error:", err.response?.data || err.message);
        // Handle validation errors from backend
        if (err.response?.data?.details) {
            const errors = Array.isArray(err.response.data.details)
                ? err.response.data.details
                : [err.response.data.details];
            errors.forEach((error) => toast.error(error));
            return null;
        }

        // Handle general errors
        const errorMessage =
            err.response?.data?.message || "Login failed";
        toast.error(errorMessage);
        return null;
    }

}